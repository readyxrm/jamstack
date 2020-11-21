<script type="text/javascript">
    function Reserve() { 
        var requestjson = '{"requests": [';
        var records = document.getElementsByName('guidarray[]'); 
        var resvalues = document.getElementsByName('array[]'); 
            
        for (var i = 0; i < records.length; i++) { 
            var a = records[i]; 
            var b = resvalues[i];

            requestjson = requestjson + '{"recordid": "' + a.value + '",';
            requestjson = requestjson + '"resvalue": ' + b.value + '}';
            if(i+1 < records.length) requestjson = requestjson + ',';
        } 
        requestjson = requestjson + ']}';
        document.getElementById("par").innerHTML = requestjson; 

        var req = new XMLHttpRequest();
        var url = "https://prod-24.canadacentral.logic.azure.com:443/workflows/1a8850aa61034e86bcca931ae3518ee7/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=G1p-Q1Q9r5GeSqmiJ17qz2R-fS839Jkx_0X868xVswo";

        req.open("POST", url, true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(requestjson);

        document.getElementById("par").innerHTML = "Request Sent";

        req.onreadystatechange = function() {
            if (req.readyState == XMLHttpRequest.DONE) {
              //alert(req.responseText);
              document.getElementById("par").innerHTML = req.responseText;
             }

         };

    }
</script>