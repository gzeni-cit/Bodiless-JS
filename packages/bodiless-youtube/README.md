# YouTube Component

The YouTube Component can be used to place a [YouTube video](https://www.youtube.com/) on a page via the
BodilessJS edit interface. The YouTube Component is responsive and features 
a 16:9 ratio by default. 

## Content Editor Details

To add a YouTube Component to your site:

01. In [Edit Mode](/ContentEditorUserGuide/#edit-mode), select the YouTube Component from the
    Component Library.  
    ![YouTube Component in Component Library](./assets/YoutubeComponentLibrary.jpg ':size=75%')

01. Click on your newly added YouTube Component, and, within its context menu, under "YouTube,"
    click **Settings**.  
    ![YouTube Configuration form](./assets/YoutubeConfig.jpg ':size=50%')

01. Enter the target YouTube URL, and click the checkmark (or press Enter) to confirm.

    <!-- Inlining HTML to add multi-line info block with unordered list. -->
    <div class="warn">
      <strong>Note:</strong> Please note the following accepted URL formats:

      * **Share** (e.g., https://youtu.be/_LBdqpscwi0)
      * **Watch** (e.g., https://www.youtube.com/watch?v=_LBdqpscwi0)
      * **Embed** (e.g., https://www.youtube.com/embed/_LBdqpscwi0)

    </div>

01. Resize or reposition the YouTube Component using the Flow Container controls.

---

## Site Builder Details

The YouTube Component can be used to place a YouTube video on a page via the 
BodilessJS edit interface.

?> Please note that the [Embed Component](../../../Components/Embed) must be activated on your site for the YouTube Component to work.


``` js
  import { YouTube } from '@bodiless/youtube';

  <YouTube nodeKey="youtube" />
  ```

You can also use the HOC version of this which can then be applied to 
other components. But the underlining component must accept the same props
as an `iframe` tag. Simply pass the node key to the asBodilessYouTube function
and then use the returned HOC

  ``` js
  import { CustomYouTube } from 'my-library';
  import { asBodilessYouTube } from '@bodiless/youtube';

  const YouTube = asBodilessYouTube('customYouTube')(CustomYouTube);

  <YouTube />
  ```

You can configure YouTube player settings leveraging withYouTubePlayerSettings 
HOC. For example, to configure AutoPlay for the YouTube component:

  ``` js
  import { YouTube } from '@bodiless/youtube';

  const AutoPlayYouTube = withYouTubePlayerSettings({
    autoplay: true,
    mute: true,
  })(YouTube);

  <AutoPlayYouTube nodeKey="youtube" />
  ```

### Props

| name           | default   | description                                                                         |
|----------------|-----------|-------------------------------------------------------------------------------------|
| nodeKey        | undefined | Identifies where the component data will be stored.                                 |
| playerSettings | undefined | YouTube embed player settings. Check YouTubePlayerSettings type from 'Youtube.tsx'. |

In addition, you can pass `HTMLIFrameElement` props (id, src, width, etc.). Check `HTMLIFrameElement` type for more details.

### `playerSettings` Parameters 

The YouTube Component utilizes an API that allows you to change the following
properties/parameters. You can use defaultPlayerSettings to set parameters that
are commonly used together. For more details on each individual parameter see [YouTube Player API Reference for iframe Embeds](https://developers.google.com/youtube/iframe_api_reference). 


| Parameters | Suggested Default | 
| -------- | -------- |
| autoplay     | 0     |
| cc_lang_pref    | no default    |
| cc_load_policy  | 0 |
| controls |  1 |
| loop |  0 |
| enablejsapi  |  1 |
| modestbranding |  1 |
| origin |  canonical URL |
| rel | 0 |
| mute | |
| version | |
| playlist | |


e.g.: Responsive YouTube with 16:9 ratio with custom language preferences:


```
const withCustomLangPref = flowRight(
  withYouTubePlayerSettings({
    ...defaultPlayerSettings,
    cc_lang_pref: 'de',
    cc_load_policy: 1,
  }),
  addProps({
    src: 'https://www.youtube.com/embed/9No-FiEInLA',
  }),
);

const YouTubeWithCustomLangPref = withDesign({
  Item: withCustomLangPref,
})(DefaultReponsive16By9YouTube);
```

### Usage

```
<YouTubeWithCustomLangPref nodeKey="withLangPref" />
```

---

## Architectural Details

The YouTube Component renders the following code:

```
<iframe id="player" type="text/html" 
  src=""
  frameborder="0">
</iframe>
```

?> There are optional parameters on the src that are configurable.
