fetch("http://api.tvmaze.com/shows/6771/episodebynumber?season=1&number=1")
    .then(res => {
        console.log("RESPONSE, WAITING TO PARSE...", res)
        return res.json();
    }) .then(data => {
        console.log(data, "parsed data")
        console.log(data.name);
    }) .catch(err => {
        console.log(err, "this is the error message");
    })


    const fetchTitle = async () => {
        try {
        const res = await fetch("http://api.tvmaze.com/shows/6771/episodebynumber?season=1&number=1")
        const data = await res.json();
        console.log(data.name);
    } catch (err) {
        console.log("Something went wrong", err);
    }
    }

    fetchTitle();