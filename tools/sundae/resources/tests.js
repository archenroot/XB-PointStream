{
	"testSuite": [{
		"test":
    [
      {
        "name": "only verts",
        "dependancyURL": ["../../mjs.js",
                          "../../psapi.js",
                          "../../parsers/asc.js",
                          "../../parsers/pts.js"],
        "referenceImageURL": "resources/only_verts/only_verts.png",
        "run": {"src": "resources/only_verts/only_verts.js", "func": "start" }
      },
      {
        "name": "1",
        "dependancyURL": ["../../mjs.js",
                          "../../psapi.js",
                          "../../parsers/asc.js",
                          "../../parsers/pts.js"],
        "referenceImageURL": "resources/acorn_unlit/acorn_unlit.png",
        "run": {"src": "resources/acorn_unlit/acorn_unlit.js", "func": "start" }
      },
      {
        "name": "user shader",
        "dependancyURL": ["../../mjs.js",
                          "../../psapi.js",
                          "../../parsers/asc.js",
                          "../../parsers/pts.js",
                          "resources/user_shader/user_shader.js"],
        "referenceImageURL": "resources/user_shader/mickey_lit.png",
        "run": {"src": "resources/user_shader/test.js", "func": "start" }
      }
    ]
  }]
}
	