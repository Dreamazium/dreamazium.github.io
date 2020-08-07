/***********
 * advice App
 * 
 * File modified by: (Tony McDonald)
 ************/

/**
 * This is the main class
 */
var app = {
	initialize: function () {
        
        // this.onDeviceReady();
		document.addEventListener(
			"deviceready",
			this.onDeviceReady(),
			false
        );
	},
	// deviceready Event Handler
	onDeviceReady: function () {
        //alert("hello");
		this.receivedEvent("deviceready");
	},
	// Update DOM on a Received Event
	receivedEvent: function (id) {
       
        function myAdvice() {
            
            var uri = "https://api.adviceslip.com/advice"
            var onSuccess = function(data){
                var obj = JSON.parse(data);
                document.getElementById("advice").innerHTML = obj.slip.advice;   
            }
            $.get(uri, onSuccess);

        }
        
        function Advice(){
			// These varibles are private
			var covidStatsObject = {};			

            covidStatsObject.newAdvice = function(){
                //if (timerId) clearInterval(timerId);
                timerId = setInterval(myAdvice, 6e4); 
                myAdvice();
            }
			//return the intialised object
			return covidStatsObject;
		}
		app.advice = new Advice();
        app.advice.newAdvice();
	}
};
app.initialize();

