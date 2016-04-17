	var myTravels = new Array();
		
	function AddDetailsToTravels(theTravels, longitude, latitude, place, date, link, photoLink, photoWidth, photoHeight )
	{
		var myDetails = new Array();
		myDetails[0] = longitude;
		myDetails[1] = latitude;
		myDetails[2] = place;
		myDetails[3] = date;
		myDetails[4] = link;
		myDetails[5] = photoLink;
		myDetails[6] = photoHeight;
		myDetails[7] = photoWidth;
		
		theTravels[theTravels.length] = myDetails;
	}
	
	AddDetailsToTravels(myTravels,49.5,0.05,"Normandy and Brittany","August 1995","http://www.janeandrichard.co.uk/travel/brittanynormandy.html","",0,0);	
	AddDetailsToTravels(myTravels,27.93,-15.38,"Gran Canaria","September 1996","http://www.janeandrichard.co.uk/travel/grancanaria.html","",0,0);
	AddDetailsToTravels(myTravels,28.73333,-13.86667,"Fuertaventura","June 1997","http://www.janeandrichard.co.uk/travel/fuertaventura.html","",0,0);
	AddDetailsToTravels(myTravels,57.82,-3.97,"Scotland","September 1998","http://www.janeandrichard.co.uk/travel/scotland.html","",0,0);
	AddDetailsToTravels(myTravels,4.2,73.53,"Biyadoo","December 1998","http://www.janeandrichard.co.uk/travel/maldivesfull.html","http://www.janeandrichard.co.uk/travel/images/scanmaldivesfrontcover.jpg",120,90);
	AddDetailsToTravels(myTravels,64.13,-21.9,"Iceland","April 1999","http://www.janeandrichard.co.uk/travel/icelandfull.html","http://www.janeandrichard.co.uk/travel/images/iceland99.jpg",120,90);
	AddDetailsToTravels(myTravels,43.10,17.54,"Hungary","August 1999","http://www.janeandrichard.co.uk/travel/hungary.html","http://www.janeandrichard.co.uk/travel/images/scanhungaryhotel.jpg",300,90);
	AddDetailsToTravels(myTravels,36.15,-5.35,"Gibraltar","August 1999","http://www.janeandrichard.co.uk/travel/gibraltar.html","",0,0);
	AddDetailsToTravels(myTravels,37, -122.418,"California","May/June 2000","http://www.janeandrichard.co.uk/travel/california.html","http://www.janeandrichard.co.uk/travel/images/thumbcruz.jpg",59,100);
	AddDetailsToTravels(myTravels,51.08, -4.15,"Bude, Cornwall","Sept 2000","http://www.janeandrichard.co.uk/travel/bude.html","",0,0);
	AddDetailsToTravels(myTravels,48.72, 2.38,"Paris","November 2000","http://www.janeandrichard.co.uk/travel/paris.html","http://www.janeandrichard.co.uk/travel/images/scansacrecoeur4.jpg",100,70);
	AddDetailsToTravels(myTravels, 57.2, -3.83,"Around Britain","November 2000","http://www.janeandrichard.co.uk/travel/britain.html","http://www.janeandrichard.co.uk/travel/images/dvangelofnorth1.jpg",100,60);
	AddDetailsToTravels(myTravels, -37,  174.8,"New Zealand","Dec 2000/Jan 2001","http://www.janeandrichard.co.uk/travel/nz2001.html","http://www.janeandrichard.co.uk/travel/nz/nz/thumbp000057f.jpg",110,82);
	AddDetailsToTravels(myTravels,  52.35, -3.95,"Wales","March 2001","http://www.janeandrichard.co.uk/travel/wales.html","http://www.janeandrichard.co.uk/eyemodule/images/wales/tenby5.jpg",160,120);
	
	//places we've been to but don't have travel detail for - Barcelona (Feb 97), Seville (Jan 00), Genoa (Sept 95), Falmouth (Sept 99), Kenya (Sept 97)
	AddDetailsToTravels(myTravels,  41.28, 2.07,"Barcelona","Feb 1997","","",0,0);
	AddDetailsToTravels(myTravels,  37.42, -5.9,"Seville","Jan 2000","","",0,0);
	AddDetailsToTravels(myTravels,  44.42, 8.85,"Genoa","Sept 1995","","",0,0);
	AddDetailsToTravels(myTravels,  50.15,-5.07,"Falmouth","Sept 99","","",0,0);
	AddDetailsToTravels(myTravels, -0.27,36.1,"Kenya","Sept 97","","",0,0);
		
	function load() 
	{
	      if (GBrowserIsCompatible()) 
	      {
	      	var map = new GMap2(document.getElementById("map"));
			map.addControl(new GSmallMapControl());
			map.addControl(new GMapTypeControl());
			//map.setCenter(new GLatLng(50.81851685601869, -0.1380157470703125), 2); //seems to be centred on Sussex, and at a decent dimension
			map.setCenter(new GLatLng(0, 0), 1); //seems to be centred on Sussex, and at a decent dimension
	
			// Create our "tiny" marker icon
			var icon = new GIcon();
			icon.image = "http://labs.google.com/ridefinder/images/mm_20_green.png";
			icon.shadow = "http://labs.google.com/ridefinder/images/mm_20_shadow.png";
			icon.iconSize = new GSize(12, 20);
			icon.shadowSize = new GSize(22, 20);
			icon.iconAnchor = new GPoint(6, 20);
			icon.infoWindowAnchor = new GPoint(5, 1);
			
			//want an array with long, lat, , place, date, url, photo url, photo height, photo width
			
			// Creates a marker at the given point with the given number label
			function createMarker(point, place, date, link, photo, photoHeight, photoWidth) 
			{
			  var marker = new GMarker(point,icon );
			  GEvent.addListener(marker, "click", 
			  	function() 
			  	{
			  		if (link.length > 0)
			  		{
			    		marker.openInfoWindowHtml("<a href=" + link + ">" + place + " - " + date + "</a><br /><br /><p align='center'><a href=" + link + "><img src=" + photo + " alt=" + place + " width=" + photoWidth + " height = " + photoHeight + "/></a></p>");
			    	}
			    	else
			    	{
			    		marker.openInfoWindowHtml(place + " - " + date);
			    	}
			  	});


			  return marker;
			}
			
			for (var i in myTravels)
			{
				var details = myTravels[i];
			
				var point = new GLatLng(details[0], details[1]);
				map.addOverlay(createMarker(point, details[2], details[3], details[4], details[5], details[6], details[7]));
				
			}	

		}
	}
