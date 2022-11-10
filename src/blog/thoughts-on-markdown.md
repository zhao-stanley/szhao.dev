title: Thoughts on Markdown
date: "11/10/2022"
draft: false
desc: "Some thoughts about Markdown and packages that accompany it."
genre: webdev

---

Working with Markdown was a very fun experience. Some cool things I thought in particular were the [ReactMarkdown](https://github.com/remarkjs/react-markdown) and [RemarkGemoji](https://github.com/remarkjs/remark-gemoji) packages.

## ReactMarkdown

ReactMarkdown is what parses this content I'm writing in the first place. Bundling it with a package such as [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) allows me to create nice looking codeblocks such as this:

_Java Example_

```java
String one = "foo";
String two = "bar";

System.out.println(one + two); //foobar
```

_C++ Example_

```c++
int main() {
  //Fast I/O
  ios::sync_with_stdio(false);
  cin.tie(0);

  int t;
  cin >> t;

  while (t--) {
    int temp;
    cin >> temp;
    cout << temp * 2;
  }
}
```

The cool part is that you can specify the langauge after the three backquotes to get the proper syntax highlighting. Visual Studio Code's Intellisense also appears to recognize it, which makes for a fun experience writing Markdown.

## RemarkGemoji

On a smaller note, I just thought that emojis were cool. Having used Discord, which shares the same features when it comes to Markdown and emojis, I found it really cool that there were packages for emojis in Markdown as well.

With [RemarkGemoji](https://github.com/remarkjs/remark-gemoji), it allows me to use the same syntax as Discord emojis with the colons.

_Examples:_

- `:rocket:` --> :rocket:
- `:smiling_imp:` --> :smiling_imp:
- `:smiley`: --> :smiley:

## Summary

Writing Markdown is great. Packages by [Remark](https://github.com/remarkjs/remark) and [Rehype](https://github.com/rehypejs/rehype) make writing fun, allowing you to incorporate all types of customization to your posts. To me, writing Markdown feels like writing a long Discord message :joy:. Super cool technology and can't wait to see where it goes from here.
