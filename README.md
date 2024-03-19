https://www.tristanpendergrass.com/teriyaki/

<img width="256px" src="https://github.com/tristanpendergrass/teriyaki/assets/4894672/741b018e-6aa9-41d4-9b30-b1e7fd56c293" />


A webpage mapping all of the teriyaki shops visited by [J. Kenji López-Alt](https://www.kenjilopezalt.com/) on his All the Teriyaki in Seattle journey! Kenji is uploading videos of him visiting Seattle teriyaki shops to his [alternate Youtube channel](https://www.youtube.com/@JKenjiLopezMain) with the stated goal of visiting them all. The design goals of this webpage are:
* Track all the places visited by Kenji on a map
* Provide a summary of Kenji's analysis of the food for reference

# Development

```
$ npm install
$ npm start
```

## Updating data
To add or update info edit `src/rawData.json`.

# Deployment

```
$ // first commit all your changes
$ npm run build
$ git add . && git commit -m "Build /docs"
$ git push origin master
```
