fetch("http://api.tvmaze.com/shows/6771/episodebynumber?season=1&number=1")
    .then(res => {
        console.log("RESPONSE, WAITING TO PARSE...", res)
        return res.json();
    }) .then(data => {
        console.log(data, "this is clg from the second then")
    }) .catch(err => {
        console.log(err, "this is the error message");
    })