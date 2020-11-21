<script type="text/javascript">
    function Reserve() { 
        //Begin to build JSON string
        var requestjson = '{"requests": [';

        //Get items from HTML table
        var records = document.getElementsByName('guidarray[]'); 
        var resvalues = document.getElementsByName('array[]'); 
        
        //loop through each of the rows on the HTML table
        for (var i = 0; i < records.length; i++) { 

            //get the guid of the record
            var a = records[i]; 
            //get the request value
            var b = resvalues[i];

            //continue to build JSON string
            requestjson = requestjson + '{"recordid": "' + a.value + '",';
            requestjson = requestjson + '"resvalue": ' + b.value + '}';

            //if not at the end of records, add a comma to seperate records in JSON string
            if(i+1 < records.length) requestjson = requestjson + ',';
        } 
        //close of the JSON string correctly
        requestjson = requestjson + ']}';

        //display the JSON string on page so we can use it to build flow to accept request
        document.getElementById("par").innerHTML = requestjson; 

        //instance a new XMLHttpRequest
        var req = new XMLHttpRequest();

        //set to the URL generated from Power Automate
        var url = "--URL from Power Automate--";

        //send the request header and content as a POST
        req.open("POST", url, true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(requestjson);

        //Update the web page that the message has been sent
        document.getElementById("par").innerHTML = "Request Sent";

        //Wait for a response to see if flow ran successfully and let end user know, will take a few seconds as flows run asychronously
        req.onreadystatechange = function() {
            if (req.readyState == XMLHttpRequest.DONE) {
              //alert(req.responseText);
              document.getElementById("par").innerHTML = req.responseText;
             }

         };

    }
</script>