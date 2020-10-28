# Vue demo

<div id="main">hello {{ msg }}</div>

<script>
  new Vue({
    el: '#main',
    data: { msg: 'Vue' }
  })
</script>

As a sort of key for navigating this site you'll probably see things like this:

* Bulleted lists
* like this

dividers,

---

# headings

## subheading

### sub-subheading

#### how far does this gooo?

- [ ] task lists (that you can't interact with)
- [x] like this

> Quote boxes like this

?> extra information boxes like this

!> WARNINGS like this

expandable footnotes- click the number --> <a class="ptr">(1)</a>
(currently there's a bug where these may not always work<a class="ptr">(2)</a>)


<ol hidden id="footnotes">
    <li>Like This</li>
    <li>From what I can tell this bug is related to the white space in the document around the hidden html element that this text is contained in</li>
</ol>



tables

| that | look |
| ---- | ---- |
| a    | bit  |
| like | this |

$\LaTeX \ math \ blocks \ like \ this \frac{1}{\sum_{n=1}^{10}n}$

<u>underlined,</u> **bold** , and *italics*

`inline code`

and code blocks

```python
for i in range(1, 10):
	# code blocks like this
	sum = sum+i
return 1/sum
```









# Added stuff mostly useless to users of this site:

# Static Site Generators vs Docsify

# Useful HTML snippets and ideas

## iframes

## Summary

## Using embeds

?> reddit embeds seem to be particularly fucky ¯\\_(ツ)_/¯



<iframe width="1411" height="776" src="https://www.youtube.com/embed/z2v1ok6qlr8?list=PL5cGwrD7cv8jd0PSN2E8pFD97H3R5aQwN" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

!> note, youtube "copy embed code" depends on current size on screen of the embed, this can be fixed a bit by changing the start to <iframe width="100%" height="450"


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The ULTRA spicy pillow (normal battery for comparison) <a href="https://t.co/yS1OUW7YJD">pic.twitter.com/yS1OUW7YJD</a></p>&mdash; techsupportgore (@techsupgore) <a href="https://twitter.com/techsupgore/status/1295762626899775488?ref_src=twsrc%5Etfw">August 18, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<iframe src="https://en.wikipedia.org/wiki/Webring" title="Basic iframe test, vcv"></iframe>



<div style='color: red'>

- listitem
- listitem
- listitem

Markdown can be wrapped in html to apply theming or do other things:

</div>


<details>
<summary>Click to expand</summary>

- Abc
- Abc

</details>



[cinwell website](https://en.wikipedia.org/wiki/Webring ':include :type=iframe width=100% height=400px')



<script src="//unpkg.com/mermaid/dist/mermaid.js"></script>
<script src="//unpkg.com/docsify-mermaid@latest/dist/docsify-mermaid.js"> 
<script>mermaid.initialize({ startOnLoad: true });</script>