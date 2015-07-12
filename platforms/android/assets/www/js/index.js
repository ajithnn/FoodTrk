document.addEventListener("deviceready", function() {
        var mapDiv = document.getElementById("map_canvas");


        var map = plugin.google.maps.Map.getMap(mapDiv);



        map.addEventListener(plugin.google.maps.event.MAP_READY, function() {
                var markers = [];
                var myLoc;
                map.getMyLocation(function(location) {
                        myLoc = location;
                        const Lat_1 = new plugin.google.maps.LatLng(location.latLng.lat + 0.001, location.latLng.lng + 0.0001);
                        const Lat_2 = new plugin.google.maps.LatLng(location.latLng.lat - 0.002, location.latLng.lng - 0.0001);

                            map.addMarker({
                                'position': location.latLng,
                                'icon': 'green',
                                'title': "You are here",
                                'styles': {
                                    'text-align': 'center',
                                    'font-style': 'italic',
                                    'font-weight': 'bold',
                                    'color': 'green'
                                }
                            }, function(marker) {
                                markers.push(marker);
                                marker.showInfoWindow();
                            });

                            map.animateCamera({
                                'target': location.latLng,
                                'zoom': 15,
                                'bearing': 140
                            });

                            map.addMarker({
                                'position': Lat_1,
                                'icon': 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/32/truck-icon.png',
                                'title': "Truck 1",
                                'snippet': 'Kobri',
                                'animation': plugin.google.maps.Animation.DROP,
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
                                'icon': 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/32/truck-icon.png',
                                'title': "Truck 2",
                                'snippet': 'FlavorLabs',
                                'animation': plugin.google.maps.Animation.DROP,
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