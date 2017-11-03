# vue-wechat-share

> A wechat social share component for VueJs

## Usage
	
	npm install vue-wechat-share -S

## How to use?
You can import the whole package or each module individual.

	import VueWeChatShare from 'vue-wechat-share'
	Vue.use(VueWeChatShare)


## Methods
- $reqSignByUrl(url,cb):initializing URL,if null or "",there will a default value(window.location.href)

| Params        | Type           | Require  | Desc  |
| ------------- |:-------------:| -----:|-----:|
| url      | String | No |signed url |
| cb      | method      |   Yes |The callback through the current URL to get the signature information |

- $initWXConfig(signObj,isDebug):initialize weChat sdk to share the required configuration items


| Params        | Type           | Require  | Desc  |
| ------------- |:-------------:| -----:|-----:|
| signObj      | Object | Yes | This object contains four attributes(appId、timestamp、nonceStr、signature)|
| isDebug      | Boolean      |   No |Whether to open debug debugging |

- $shareWeChat(shareParams):Share to weChat, the circle of friends,  QQ and micro-blog platform


| Params        | Type           | Require  | Desc  |
| ------------- |:-------------:| -----:|-----:|
| shareParams      | Object | Yes | This object contains four attributes(title、link、image、abstract)|

	

	