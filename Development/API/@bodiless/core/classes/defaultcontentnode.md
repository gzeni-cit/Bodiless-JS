[@bodiless/core](../README.md) › [Globals](../globals.md) › [DefaultContentNode](defaultcontentnode.md)

# Class: DefaultContentNode ‹**D**›

## Type parameters

▪ **D**: *object*

## Hierarchy

* **DefaultContentNode**

  ↳ [ContentfulNode](contentfulnode.md)

## Implements

* object

## Index

### Constructors

* [constructor](defaultcontentnode.md#constructor)

### Properties

* [actions](defaultcontentnode.md#protected-actions)
* [getters](defaultcontentnode.md#protected-getters)
* [path](defaultcontentnode.md#path)

### Accessors

* [baseResourcePath](defaultcontentnode.md#baseresourcepath)
* [data](defaultcontentnode.md#data)
* [hasError](defaultcontentnode.md#haserror)
* [keys](defaultcontentnode.md#keys)
* [pagePath](defaultcontentnode.md#pagepath)

### Methods

* [child](defaultcontentnode.md#child)
* [delete](defaultcontentnode.md#delete)
* [getActions](defaultcontentnode.md#getactions)
* [getGetters](defaultcontentnode.md#getgetters)
* [peer](defaultcontentnode.md#peer)
* [proxy](defaultcontentnode.md#proxy)
* [setData](defaultcontentnode.md#setdata)
* [dummy](defaultcontentnode.md#static-dummy)

## Constructors

###  constructor

\+ **new DefaultContentNode**(`actions`: [Actions](../globals.md#actions), `getters`: [Getters](../globals.md#getters), `path`: [Path](../globals.md#path)): *[DefaultContentNode](defaultcontentnode.md)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:102](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`actions` | [Actions](../globals.md#actions) |
`getters` | [Getters](../globals.md#getters) |
`path` | [Path](../globals.md#path) |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)*

## Properties

### `Protected` actions

• **actions**: *[Actions](../globals.md#actions)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:98](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L98)*

___

### `Protected` getters

• **getters**: *[Getters](../globals.md#getters)*

*Defined in [packages/bodiless-core/src/ContentNode.ts:100](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L100)*

___

###  path

• **path**: *string[]*

*Defined in [packages/bodiless-core/src/ContentNode.ts:102](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L102)*

## Accessors

###  baseResourcePath

• **get baseResourcePath**(): *string*

*Defined in [packages/bodiless-core/src/ContentNode.ts:130](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L130)*

**Returns:** *string*

___

###  data

• **get data**(): *D*

*Defined in [packages/bodiless-core/src/ContentNode.ts:120](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L120)*

**Returns:** *D*

___

###  hasError

• **get hasError**(): *hasError*

*Defined in [packages/bodiless-core/src/ContentNode.ts:152](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L152)*

**Returns:** *hasError*

___

###  keys

• **get keys**(): *string[]*

*Defined in [packages/bodiless-core/src/ContentNode.ts:147](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L147)*

**Returns:** *string[]*

___

###  pagePath

• **get pagePath**(): *string*

*Defined in [packages/bodiless-core/src/ContentNode.ts:125](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L125)*

**Returns:** *string*

## Methods

###  child

▸ **child**‹**E**›(`path`: [Path](../globals.md#path)): *[DefaultContentNode](defaultcontentnode.md)‹E›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:115](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L115)*

**Type parameters:**

▪ **E**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](../globals.md#path) |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)‹E›*

___

###  delete

▸ **delete**(`path?`: [Path](../globals.md#path)): *void*

*Defined in [packages/bodiless-core/src/ContentNode.ts:140](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L140)*

**Parameters:**

Name | Type |
------ | ------ |
`path?` | [Path](../globals.md#path) |

**Returns:** *void*

___

###  getActions

▸ **getActions**(): *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:166](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L166)*

**Returns:** *object*

* **deleteNode**(`path`: string[]): *void*

* **setNode**(`path`: string[], `data`: any): *void*

___

###  getGetters

▸ **getGetters**(): *object*

*Defined in [packages/bodiless-core/src/ContentNode.ts:162](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L162)*

**Returns:** *object*

* **getBaseResourcePath**(`collection`: string): *string*

* **getKeys**(): *string[]*

* **getNode**(`path`: string[]): *any*

* **getPagePath**(): *string*

* **hasError**(): *boolean*

___

###  peer

▸ **peer**‹**E**›(`path`: [Path](../globals.md#path)): *[DefaultContentNode](defaultcontentnode.md)‹E›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:111](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L111)*

**Type parameters:**

▪ **E**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](../globals.md#path) |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)‹E›*

___

###  proxy

▸ **proxy**(`processors`: [Processors](../globals.md#processors)‹D›): *[ContentNode](../globals.md#contentnode)‹D›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:157](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`processors` | [Processors](../globals.md#processors)‹D› |

**Returns:** *[ContentNode](../globals.md#contentnode)‹D›*

___

###  setData

▸ **setData**(`dataObj`: D): *void*

*Defined in [packages/bodiless-core/src/ContentNode.ts:135](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`dataObj` | D |

**Returns:** *void*

___

### `Static` dummy

▸ **dummy**(`path`: string, `initialData`: object): *[DefaultContentNode](defaultcontentnode.md)‹object›*

*Defined in [packages/bodiless-core/src/ContentNode.ts:170](https://github.com/Guilherme-Almeida-Zeni/Bodiless-JS/blob/4f0bb69e/packages/bodiless-core/src/ContentNode.ts#L170)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`path` | string | "root" |
`initialData` | object | {} |

**Returns:** *[DefaultContentNode](defaultcontentnode.md)‹object›*
