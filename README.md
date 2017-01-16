# Run

You can upload webpack.stat.json from repo to <a href="https://webpack.github.io/analyse">Webpack Analyzer</a>,
or generate new one by runing:

```bash
npm run webpack
```
#Class hierarchy
```
            Main (entry, common chunk)
           /    \
     ClassA      ClassB
       \          \
        \          ClassC
         \         /
       ReusableComponent
```
Main require ClassA and ClassB using require.ensure().<br>
ClassB require ClassC using require.ensure().<br>
ClassA and ClassC require ReusableComponent using simple require().
<p>
Finaly webpack emits following chunks:
<ul>
<li>0.js - contains ClassA, <b>ReusableComponent</b></li>
<li>1.js - contains ClassB</li>
<li>2.js - contains ClassC, <b>ReusableComponent</b></li>
<li>main.js - contains Main class</b></li>
</ul>

#Problem
I try to configure CommonChunkPlugin to move ReusableClass to main chunk in order to remove code duplication.
```javascript
new webpack.optimize.CommonsChunkPlugin({
            name: 'main',
            minChunks: 2,
            children: true
        })
```
And webpack does not do this.