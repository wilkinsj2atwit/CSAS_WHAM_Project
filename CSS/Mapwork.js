let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('tourism-map'), {
        center: { lat: 37.9838, lng: 23.7275 },
        zoom: 12
    });
}

function updateMap(place) {
    let location = { lat: 37.9838, lng: 23.7275 };
    let description = "";

    if (place === "Agora of Athens") {
        location = { lat: 37.9754, lng: 23.7235 };
        description = "<h3>Agora of Athens</h3><p>The Agora of Athens was the center of public life in ancient Athens, serving as a marketplace and a place for political discussions. It is one of the most significant archaeological sites in the city, showcasing the heart of ancient Greek democracy.</p>";
    } else if (place === "Gate of Athena Archegetis") {
        location = { lat: 37.9745, lng: 23.7255 };
        description = "<h3>Gate of Athena Archegetis</h3><p>The Gate of Athena Archegetis was a monumental gate that marked the entrance to the Roman Agora in Athens. It is dedicated to the goddess Athena Archegetis, the protector and founder of the city.</p>";
    } else if (place === "Odeon of Agrippa") {
        location = { lat: 37.9750, lng: 23.7231 };
        description = "<h3>Odeon of Agrippa</h3><p>The Odeon of Agrippa was a large concert hall built by the Roman general Agrippa. It hosted musical and theatrical performances, making it one of the most important cultural venues in ancient Athens.</p>";
    } else if (place === "Ancient Theatre at the Asclepieion of Epidaurus") {
        location = { lat: 37.5961, lng: 23.0793 };
        description = "<h3>Ancient Theatre at the Asclepieion of Epidaurus</h3><p>The theatre at Epidaurus is renowned for its exceptional acoustics and symmetry. It was built in the 4th century BC and was part of a sanctuary dedicated to Asclepius, the god of healing.</p>";
    } else if (place === "Ancient Corinth") {
        location = { lat: 37.91, lng: 22.88 };
        description = "<h3>Ancient Corinth</h3><p>Ancient Corinth was a powerful city-state in antiquity, known for its wealth and strategic location. The archaeological site includes ruins of temples, a large marketplace, and the Temple of Apollo.</p>";
    } else if (place === "Delphi Archaeological Museum") {
        location = { lat: 38.4801, lng: 22.4996 };
        description = "<h3>Delphi Archaeological Museum</h3><p>Delphi was considered the center of the world in ancient Greek mythology. The museum houses artifacts from the sanctuary of Apollo, including the famous statue of the Charioteer of Delphi.</p>";
    } else if (place === "Knossos Palace") {
        location = { lat: 35.2980, lng: 25.1628 };
        description = "<h3>Knossos Palace</h3><p>Knossos is the largest Bronze Age archaeological site on Crete, known for its advanced architecture and vibrant frescoes. It was the center of the Minoan civilization.</p>";
    } else if (place === "Acropolis of Athens") {
        location = { lat: 37.9715, lng: 23.7257 };
        description = "<h3>Acropolis of Athens</h3><p>The Acropolis is one of the most iconic ancient sites in the world. It includes the Parthenon, a temple dedicated to Athena, and other significant structures that symbolize ancient Greek civilization.</p>";
    }

    // Update the map location
    map.setCenter(location);
    new google.maps.Marker({
        position: location,
        map: map,
        title: place
    });

    // Update the description text below the map
    document.getElementById('description').innerHTML = description;
}
