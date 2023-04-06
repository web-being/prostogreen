## [ ] Multiple pages or SPA?

1. Separate pages
  + classic approach
  - requires includes mechanism
  - need to persist state somehow (localstorage?)

2. SPA
  - too much code, turns messy
  - requires inclusion mechanism for separate pages
  - raw links are unwieldy (`:onclick=e=>history.pushState(null,null,path)`), we need special directive, eg `:to="path"`

### Logic

* If we use react/etc, we include JS that renders content.
* That means that include-fragment is the same tax/method as including script.
* We need to include before running sprae
* We either need github/include-element or some server-side-tech like jekyll

a. github/include-element
  - dynamic problem

b. jekyll _includes
  + no js-side problems
  + keeps static websites going

### Frontend interaction

1. CSHTML fully, js makes parts dynamic
- too many pages
- problematic for multiple interactions

2. JSON-LD, js makes markup
- too many origin pages
+ good for multiple interactions

3.

4.