[@bodiless/gatsby-theme-bodiless](../README.md) › [Globals](../globals.md) › [BackendClient](backendclient.md)

# Class: BackendClient

## Hierarchy

* **BackendClient**

## Index

### Constructors

* [constructor](backendclient.md#constructor)

### Properties

* [prefix](backendclient.md#private-prefix)
* [root](backendclient.md#private-root)

### Methods

* [amend](backendclient.md#amend)
* [clonePage](backendclient.md#clonepage)
* [commit](backendclient.md#commit)
* [delete](backendclient.md#delete)
* [deletePage](backendclient.md#deletepage)
* [deletePath](backendclient.md#deletepath)
* [directoryChild](backendclient.md#directorychild)
* [get](backendclient.md#get)
* [getChanges](backendclient.md#getchanges)
* [getConflicts](backendclient.md#getconflicts)
* [getLatestCommits](backendclient.md#getlatestcommits)
* [getPath](backendclient.md#getpath)
* [getSetList](backendclient.md#getsetlist)
* [log](backendclient.md#log)
* [mergeMaster](backendclient.md#mergemaster)
* [post](backendclient.md#post)
* [pull](backendclient.md#pull)
* [reset](backendclient.md#reset)
* [saveFile](backendclient.md#savefile)
* [savePage](backendclient.md#savepage)
* [savePath](backendclient.md#savepath)
* [setCurrent](backendclient.md#setcurrent)

## Constructors

###  constructor

\+ **new BackendClient**(`backendClientConf?`: [BackendClientConf](../globals.md#backendclientconf)): *[BackendClient](backendclient.md)*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:28](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`backendClientConf?` | [BackendClientConf](../globals.md#backendclientconf) |

**Returns:** *[BackendClient](backendclient.md)*

## Properties

### `Private` prefix

• **prefix**: *string*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:28](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L28)*

___

### `Private` root

• **root**: *string*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:26](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L26)*

## Methods

###  amend

▸ **amend**(`paths`: string[], `files`: string[]): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:145](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L145)*

**Parameters:**

Name | Type |
------ | ------ |
`paths` | string[] |
`files` | string[] |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  clonePage

▸ **clonePage**(`origin`: string, `destination`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:104](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`origin` | string |
`destination` | string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  commit

▸ **commit**(`message`: string, `directories`: string[], `paths`: string[], `files`: string[], `author?`: undefined | string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:113](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |
`directories` | string[] |
`paths` | string[] |
`files` | string[] |
`author?` | undefined &#124; string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  delete

▸ **delete**(`resourcePath`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:53](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  deletePage

▸ **deletePage**(`path$`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:94](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`path$` | string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  deletePath

▸ **deletePath**(`resourcePath`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:62](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  directoryChild

▸ **directoryChild**(`path$`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:99](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`path$` | string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  get

▸ **get**(`resourcePath`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:45](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  getChanges

▸ **getChanges**(): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:163](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L163)*

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  getConflicts

▸ **getConflicts**(`target?`: undefined | string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:167](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`target?` | undefined &#124; string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  getLatestCommits

▸ **getLatestCommits**(): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:133](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L133)*

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  getPath

▸ **getPath**(`resourcePath`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:72](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  getSetList

▸ **getSetList**(): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:159](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L159)*

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  log

▸ **log**(`data`: any): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:67](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  mergeMaster

▸ **mergeMaster**(): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:172](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L172)*

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  post

▸ **post**(`resourcePath`: string, `data`: any): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:49](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |
`data` | any |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  pull

▸ **pull**(): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:137](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L137)*

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  reset

▸ **reset**(): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:141](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L141)*

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  saveFile

▸ **saveFile**(`file`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:77](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`file` | string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  savePage

▸ **savePage**(`path$`: string, `template?`: undefined | string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:84](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`path$` | string |
`template?` | undefined &#124; string |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  savePath

▸ **savePath**(`resourcePath`: string, `data`: any): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:57](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`resourcePath` | string |
`data` | any |

**Returns:** *Promise‹AxiosResponse‹any››*

___

###  setCurrent

▸ **setCurrent**(`name`: string): *Promise‹AxiosResponse‹any››*

*Defined in [packages/gatsby-theme-bodiless/src/dist/BackendClient.ts:155](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/63a0b81d/packages/gatsby-theme-bodiless/src/dist/BackendClient.ts#L155)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Promise‹AxiosResponse‹any››*
