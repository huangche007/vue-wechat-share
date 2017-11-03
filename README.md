# vue-wechat-share

> A wechat social share component for VueJs

## Usage
	
	npm install vue-wechat-share -S

## How to use?
You can import the whole package or each module individual.

	import VueWeChatShare from 'vue-wechat-share'
	Vue.use(VueWeChatShare)

## Methods
- $reqSignByUrl(url,cb):

| Params        | Type           | Require  | Dec  |
| ------------- |:-------------:| -----:|-----:|
| url      | String | No |signed url |
| cb      | method      |   Yes |The callback through the current URL to get the signature information |

- $initWXConfig(signObj,isDebug):


| Params        | Type           | Require  | Dec  |
| ------------- |:-------------:| -----:|-----:|
| signObj      | Object | Yes | This object contains four attributes(appId、timestamp、nonceStr、signature)|
| isDebug      | Boolean      |   No |Whether to open debug debugging |

- $shareWeChat(shareParams):


| Params        | Type           | Require  | Dec  |
| ------------- |:-------------:| -----:|-----:|
| shareParams      | Object | Yes | This object contains four attributes(title、link、image、abstract)|


	