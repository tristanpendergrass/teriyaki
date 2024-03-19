https://www.tristanpendergrass.com/teriyaki/

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
