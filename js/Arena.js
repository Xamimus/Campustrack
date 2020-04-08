Arena = function(game) {
    // Appel des variables nécéssaires
    this.game = game;
    var scene = game.scene;

    // Création de notre lumière principale
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 10, 0), scene);
    var light2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(0, -1, 0), scene);
    light2.intensity = 0.8;

    // Material pour le sol
    var materialGround = new BABYLON.StandardMaterial("wallTexture", scene);
    materialGround.diffuseTexture = new BABYLON.Texture("assets/images/tile.jpg", scene);
    materialGround.diffuseTexture.uScale = 8.0;
    materialGround.diffuseTexture.vScale = 8.0;

    // Material pour les objets
    var materialWall = new BABYLON.StandardMaterial("groundTexture", scene);
    materialWall.diffuseTexture = new BABYLON.Texture("assets/images/wood.jpg", scene);

    var materialDark = new BABYLON.StandardMaterial("darkTexture", scene);
    materialDark.diffuseTexture = new BABYLON.Texture("assets/images/noir.jpg", scene);

    var boxArena = BABYLON.Mesh.CreateBox("box1", 50, scene, false, BABYLON.Mesh.BACKSIDE);
    boxArena.material = materialGround;
    boxArena.position.y = 60 * 0.3;
    boxArena.scaling.y = 0.3;
    boxArena.scaling.z = 0.8;
    boxArena.scaling.x = 1.2;

    //Sacs Poubelle
    BABYLON.SceneLoader.ImportMesh("", "assets/objects/", "sacPoubelle.babylon", scene, function (newMeshes) {
    
        // Explore tous les meshes disponibles et récupère le mesh nommé 'nameMesh'
        for (var y = 0; y < newMeshes.length; y++) {
            if (newMeshes[y].name) {
                
                var searchMesh = newMeshes[y];
                break;
            }
        };
        // Convertit le mesh récupéré pour qu'il soit rendu en FlatShading
        searchMesh.convertToFlatShadedMesh();
        
        // On rend invisible notre mesh qui servira de prototype
        searchMesh.isVisible = true;

        searchMesh.material = materialDark;

        searchMesh.position.y = 12;
        searchMesh.position.x = -21.5;
        searchMesh.position.z = 18;

        var sac2 = searchMesh.clone('sac2'); 

        sac2.position.x = -23;
        sac2.position.z =  16;

        var sac3 = searchMesh.clone('sac3');
        
        sac3.position.x = -24.5;
        sac3.position.z = 18;
    
        // On rend le prototype accessible n'importe où
        scene.searchMeshPrototype = searchMesh;
    
    });

    //Lampes
    BABYLON.SceneLoader.ImportMesh("", "assets/objects/", "canape.babylon", scene, function (newMeshes) {
    
        // Explore tous les meshes disponibles et récupère le mesh nommé 'nameMesh'
        for (var y = 0; y < newMeshes.length; y++) {
            if (newMeshes[y]) {
                if(y = 0)
                {
                    var searchMesh = newMeshes[0];
                }
                else
                {
                    newMeshes[y].parent = searchMesh;
                }
            }
            else 
            {
                break;
            }
        };
        // Convertit le mesh récupéré pour qu'il soit rendu en FlatShading
        //searchMesh.convertToFlatShadedMesh();
        
        // On rend invisible notre mesh qui servira de prototype
        //searchMesh.isVisible = false;

        searchMesh.position.y = 12;
    
        // On rend le prototype accessible n'importe où
        scene.searchMeshPrototype = searchMesh;
    
    });





    


    
};