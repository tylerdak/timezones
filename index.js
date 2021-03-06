String.prototype.insert = function(index, string) {
    if (index > 0) {
      return this.substring(0, index) + string + this.substr(index);
    }
  
    return string + this;
};

// Load tasks go here
window.onload = function() {
    var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(`Time zone: ${tz}`);
    tz = new Date().getTimezoneOffset()
    utcVal = (tz/60) * -1
    utcPlus = utcVal > 0 ? "+" : ""
    document.getElementById("timeZoneName").innerHTML = `UTC${utcPlus}${utcVal}`

    const queryString = window.location.search

    const urlParams = new URLSearchParams(queryString)

    if (urlParams.has("zone") && urlParams.has("time")) {
        const zone = urlParams.get("zone")
        const time = urlParams.get("time")

        originalUTCPlus = zone > 0 ? "+" : ""

        console.log(zone)
        console.log(time)

        if (time.length == 4) {
            const correctedTime = time.insert(2,":")
            document.getElementById("validTimeInfo").innerHTML = `
                <h3>Original Time:</h3>
                <h2>${correctedTime} UTC${originalUTCPlus}${zone}</h2>
                <br>
                <h3>Time in UTC${utcPlus}${utcVal}:</h3>
                <h2>${correctedTime}

                `
        }
    }

    
}