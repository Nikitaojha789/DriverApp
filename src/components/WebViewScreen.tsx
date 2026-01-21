import React, {useState} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppConstant} from '../constant/app_constant';
import { useSelector } from 'react-redux';

interface WebViewScreenProps {
  route: {
    params: {
      url: string;
    };
  };
}

export default function WebViewScreen({route}: WebViewScreenProps) {
  const {url} = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loadProgress, setLoadProgress] = useState(0);
  const [tokenStatus, setTokenStatus] = useState<'checking' | 'injected' | 'failed' | 'not_checked'>('not_checked');
    const userDetail = useSelector((state: any) => state?.user);
    //Console.log("🚀 ~ WebViewScreen ~ userDetail:", userDetail?.token)

  // // Get user token from AppConstant
  // const userToken = AppConstant.userToken;
  // //Console.log('🚀 ~ WebViewScreen ~ userToken:', userToken);
  //Console.log('🚀 ~ WebViewScreen ~ url:', url);


  const INJECTED_JAVASCRIPT = `(function() {
    // Set authentication token
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('lk_provider_auth_token', '${userDetail?.token || ''}');
      
      // Verify token injection and send status to React Native
      const token = localStorage.getItem('lk_provider_auth_token');
      const tokenStatus = token && token !== 'null' && token !== 'undefined' && token !== '' ? 'injected' : 'failed';
      
      // Send token verification status to React Native
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'TOKEN_STATUS',
        status: tokenStatus,
        token: token ? token.substring(0, 20) + '...' : 'null',
        timestamp: Date.now()
      }));
      
      // Also log to console for debugging
      //Console.log('🔐 Token Injection Status:', tokenStatus);
      //Console.log('🔐 Token Preview:', token ? token.substring(0, 20) + '...' : 'null');
      //Console.log('🔐 Full localStorage:', JSON.stringify({
        lk_provider_auth_token: token,
        allKeys: Object.keys(localStorage)
      }));
    } else {
      // Send error if localStorage is not available
      window.ReactNativeWebView.postMessage(JSON.stringify({
        type: 'TOKEN_STATUS',
        status: 'failed',
        error: 'localStorage not available',
        timestamp: Date.now()
      }));
    }
    
    // Add custom CSS for better mobile experience
    const style = document.createElement('style');
    style.textContent = \`
      /* Change tap/click highlight color to white */
      * {
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;
        -webkit-touch-callout: none !important;
        -webkit-user-select: none !important;
        -khtml-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }
      
      /* Allow text selection for input fields and text areas */
      input, textarea, [contenteditable="true"] {
        -webkit-user-select: text !important;
        -khtml-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
      }
      
      /* Custom focus styles for better accessibility */
      *:focus {
        outline: 2px solid rgba(255, 255, 255, 0.3) !important;
        outline-offset: 2px !important;
      }
      
      /* Remove default button and link focus styles */
      button:focus, a:focus {
        outline: 2px solid rgba(204, 204, 204, 0.3) !important;
        outline-offset: 2px !important;
      }
      
      /* Custom active state for buttons and links */
      button:active, a:active, [role="button"]:active {
        background-color: rgba(255, 255, 255, 0.2) !important;
        transform: scale(0.98) !important;
        transition: all 0.1s ease !important;
      }
      
      /* Remove default touch callout */
      img, a {
        -webkit-touch-callout: none !important;
      }
    \`;
    document.head.appendChild(style);
  })();`;

  const onLoadStart = () => {
    //Console.log('🚀 ~ WebView ~ onLoadStart');
    setIsLoading(true);
    setHasError(false);
    setErrorMessage('');
    setLoadProgress(0);
  };

  const onLoadEnd = () => {
    //Console.log('🚀 ~ WebView ~ onLoadEnd');
    setIsLoading(false);
    setLoadProgress(100);
  };

  const onError = (syntheticEvent: any) => {
    const {nativeEvent} = syntheticEvent;
    //Console.log('🚀 ~ WebView ~ onError:', nativeEvent);
    setIsLoading(false);
    setHasError(true);
    setErrorMessage(nativeEvent.description || 'Failed to load the webpage');
  };

  const onHttpError = (syntheticEvent: any) => {
    const {nativeEvent} = syntheticEvent;
    //Console.log('🚀 ~ WebView ~ onHttpError:', nativeEvent);
    setIsLoading(false);
    setHasError(true);
    setErrorMessage(`HTTP Error ${nativeEvent.statusCode}: ${nativeEvent.description || 'Network error'}`);
  };

  const onLoadProgress = (syntheticEvent: any) => {
    const {nativeEvent} = syntheticEvent;
    //Console.log('🚀 ~ WebView ~ onLoadProgress:', nativeEvent.progress);
    setLoadProgress(nativeEvent.progress * 100);
  };

  const onRetry = () => {
    //Console.log('🚀 ~ WebView ~ onRetry');
    setHasError(false);
    setErrorMessage('');
    setIsLoading(true);
    setLoadProgress(0);
    setTokenStatus('not_checked');
  };

  const onMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      //Console.log('🚀 ~ WebView ~ onMessage:', data);

      if (data.type === 'TOKEN_STATUS') {
        setTokenStatus(data.status);
        //Console.log('🔐 Token Status Update:', data.status);
        //Console.log('🔐 Token Preview:', data.token);
        if (data.error) {
          //Console.log('🔐 Token Error:', data.error);
        }
      }
    } catch (error) {
      //Console.log('🚀 ~ WebView ~ onMessage Error:', error);
    }
  };

  // Function to manually test token injection
  // const testTokenInjection = () => {
  //   const testScript = `
  //     (function() {
  //       const token = localStorage.getItem('lk_provider_auth_token');
  //       const result = {
  //         type: 'TOKEN_TEST',
  //         status: token && token !== 'null' && token !== 'undefined' && token !== '' ? 'found' : 'not_found',
  //         token: token ? token.substring(0, 20) + '...' : 'null',
  //         fullToken: token,
  //         allLocalStorage: JSON.stringify(localStorage),
  //         timestamp: Date.now()
  //       };
  //       window.ReactNativeWebView.postMessage(JSON.stringify(result));
  //       //Console.log('🧪 Token Test Result:', result);
  //     })();
  //   `;
    
  //   // This would need to be called on the WebView ref
  //   //Console.log('🧪 Testing token injection...');
  //   //Console.log('🧪 Current token from AppConstant:', userToken);
  // };

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: url}}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onError={onError}
        onHttpError={onHttpError}
        onLoadProgress={onLoadProgress}
        onMessage={onMessage}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        allowsBackForwardNavigationGestures={true}
        pullToRefreshEnabled={true}
        userAgent="LocalKonnectApp/1.0"
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        )}
      />

      {/* Token Status Indicator */}
      {/* {tokenStatus !== 'not_checked' && (
        <View style={styles.tokenStatusContainer}>
          <View style={[
            styles.tokenStatusBadge,
            tokenStatus === 'injected' ? styles.tokenStatusSuccess : styles.tokenStatusError,
          ]}>
            <Text style={styles.tokenStatusText}>
              🔐 Token: {tokenStatus === 'injected' ? '✓ Injected' : '✗ Failed'}
            </Text>
          </View>
        </View>
      )} */}

      {/* Loading Overlay */}
      {isLoading && !hasError && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Loading...</Text>
          {loadProgress > 0 && (
            <Text style={styles.progressText}>{Math.round(loadProgress)}%</Text>
          )}
        </View>
      )}

      {/* Error Overlay */}
      {hasError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Failed to Load</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <Text style={styles.errorUrl}>URL: {url}</Text>
          <View style={styles.retryButton}>
            <Text style={styles.retryButtonText} onPress={onRetry}>
              Retry
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  progressText: {
    marginTop: 5,
    fontSize: 14,
    color: '#999',
  },
  errorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 20,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF3B30',
    marginBottom: 10,
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 22,
  },
  errorUrl: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  retryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  tokenStatusContainer: {
    position: 'absolute',
    top: 50,
    right: 10,
    zIndex: 1000,
  },
  tokenStatusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tokenStatusSuccess: {
    backgroundColor: '#4CAF50',
  },
  tokenStatusError: {
    backgroundColor: '#F44336',
  },
  tokenStatusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});
