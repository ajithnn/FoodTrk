document.addEventListener("deviceready", function() {
        var mapDiv = document.getElementById("map_canvas");


        var map = plugin.google.maps.Map.getMap(mapDiv);



        map.addEventListener(plugin.google.maps.event.MAP_READY, function() {
                var markers = [];
                var myLoc;
                map.getMyLocation(function(location) {
                        myLoc = location;
                        alert(location.latLng.lat + 1);
                        const Lat_1 = new plugin.google.maps.LatLng(location.latLng.lat + 1, location.latLng.lng + 1);
                        const Lat_2 = new plugin.google.maps.LatLng(location.latLng.lat + 2, location.latLng.lng + 1);
                        var msg = ["Current your location:\n",
                            "latitude:" + location.latLng.lat,
                            "longitude:" + location.latLng.lng
                            ];

                            map.addMarker({
                                'position': location.latLng,
                                'title': msg
                            }, function(marker) {
                                markers.push(marker);
                                marker.showInfoWindow();
                            });

                            map.animateCamera({
                                'target': location.latLng,
                                'tilt': 60,
                                'zoom': 18,
                                'bearing': 140
                            });

                            map.addMarker({
                                'position': Lat_1,
                                'title': "Truck 1",
                                'snippet': 'Kobri',
                                'styles': {
                                    'text-align': 'center',
                                    'font-style': 'italic',
                                    'font-weight': 'bold',
                                    'color': 'red'
                                }
                            }, function(marker) {
                                markers.push(marker);
                                marker.addEventListener(plugin.google.maps.event.INFO_CLICK, function() {
                                    alert("Today's Special is IdlyWich");
                                });
                            });

                            map.addMarker({
                                'position': Lat_2,
                                'title': "Truck 2",
                                'snippet': 'FlavorLabs',
                                'styles': {
                                    'text-align': 'center',
                                    'font-style': 'italic',
                                    'font-weight': 'bold',
                                    'color': 'red'
                                }
                            }, function(marker) {
                                markers.push(marker);
                                markers[0].showInfoWindow();
                                //markers[1].showInfoWindow();
                                marker.addEventListener(plugin.google.maps.event.INFO_CLICK, function() {
                                    alert("Today's Special is Burrito Masala.");
                                });
                            });


                        });

                });
        });