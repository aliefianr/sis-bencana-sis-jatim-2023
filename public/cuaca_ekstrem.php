<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">

    <link rel="stylesheet" href="cuaca_ekstrem/resources/ol.css">
    <link rel="stylesheet" href="cuaca_ekstrem/resources/fontawesome-all.min.css">
    <link rel="stylesheet" href="cuaca_ekstrem/resources/ol-layerswitcher.css">
    <link rel="stylesheet" href="cuaca_ekstrem/resources/qgis2web.css">


    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

    <style>
        html,
        body,
        #map {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
            background-color: #ffffff;
        }


        .navbar-left-bottom {
            position: fixed;
            bottom: 20px;
            left: 20px;
            width: auto;
            background-color: #ffffff;
            /* Bootstrap Dark */
            border-radius: 8px;
            z-index: 1000;
            padding: 10px 15px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            color: black;
        }

        .navbar-left-bottom h2 {
            margin-bottom: 10px;
        }

        .legend-item {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
        }

        .legend-box {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            border: 1px solid black;
        }

        .navbar-left-bottom p {
            margin: 0;
        }


        .top-navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1100;
        }

        html,
        body {
            background-color: #ffffff;
        }

        .ol-control>* {
            background-color: #f8f8f8 !important;
            color: #444444 !important;
            border-radius: 0px;
        }

        .ol-attribution a,
        .gcd-gl-input::placeholder,
        .search-layer-input-search::placeholder {
            color: #444444 !important;
        }

        .search-layer-input-search {
            background-color: #f8f8f8 !important;
        }

        .ol-control button {
            height: 2em;
            width: 2em;
            font-size: 2em;
        }

        .ol-control>*:focus,
        .ol-control>*:hover {
            background-color: rgba(248, 248, 248, 0.7) !important;
        }

        .ol-control {
            background-color: rgba(255, 255, 255, .4) !important;
            padding: 2px !important;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }


        html,
        body,
        #map {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
        }

        #top-left-container {
            top: 60px;
        }
    </style>
    <title>Bencana Cuaca Ekstrem</title>
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark top-navbar">

        <img src="logo.png" width="34px" height="48px" style="margin-right: 10px ;">
        <a class="navbar-brand h4" href="#">Pemetaan Riwayat Bencana Alam di Jawa Timur 2023</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav" style="display:flex; justify-content:end;">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link font-weight-bold" href="cuaca_ekstrem.php">Cuaca Ekstrem</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="kebakaran_hutan.php">Kebakaran Hutan</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="banjir.php">Banjir</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="tanah_longsor.php">Tanah Longsor </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="gempa_bumi.php">Gempa Bumi</a>
                </li>
            </ul>
        </div>
    </nav>


    <div id="map">
        <div id="popup" class="ol-popup">
            <a href="#" id="popup-closer" class="ol-popup-closer"></a>
            <div id="popup-content"></div>
        </div>
    </div>


    <div class="navbar-left-bottom">
        <h5>Cuaca Ekstrem terjadi sebanyak :</h5>
        <div class="legend-item">
            <div class="legend-box" style="background-color: white;"></div>
            <p>0 Kali</p>
        </div>
        <div class="legend-item">
            <div class="legend-box" style="background-color: #d8e5f4;"></div>
            <p>1 Kali</p>
        </div>
        <div class="legend-item">
            <div class="legend-box" style="background-color: #add1e7;"></div>
            <p>2 Kali</p>
        </div>
        <div class="legend-item">
            <div class="legend-box" style="background-color: #72b2d7;"></div>
            <p>3 Kali</p>
        </div>
        <div class="legend-item">
            <div class="legend-box" style="background-color: #3e8dc1;"></div>
            <p>4 Kali</p>
        </div>
        <div class="legend-item">
            <div class="legend-box" style="background-color: #11679f;"></div>
            <p>5 Kali</p>
        </div>
        <div class="legend-item">
            <div class="legend-box" style="background-color: #08306d;"></div>
            <p>6 Kali</p>
        </div>
    </div>

    <div id="content">
        <div id="map">
            <div id="popup" class="ol-popup">
                <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
        </div>
    </div>


    <script src="cuaca_ekstrem/resources/qgis2web_expressions.js"></script>
    <script src="cuaca_ekstrem/resources/functions.js"></script>
    <script src="cuaca_ekstrem/resources/ol.js"></script>
    <script src="cuaca_ekstrem/resources/ol-layerswitcher.js"></script>
    <script src="cuaca_ekstrem/layers/CuacaEkstrem_0.js"></script>
    <script src="cuaca_ekstrem/styles/CuacaEkstrem_0_style.js"></script>
    <script src="cuaca_ekstrem/layers/layers.js" type="text/javascript"></script>
    <script src="cuaca_ekstrem/resources/Autolinker.min.js"></script>
    <script src="cuaca_ekstrem/resources/qgis2web.js"></script>


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.4.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>