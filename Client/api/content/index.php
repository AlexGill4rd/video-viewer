<?php
    header("Access-Control-Allow-Origin: *");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    
    if (empty($_POST['key'])) die();
    if ($_POST['key'] != '123') die();

    if ($_POST){
        http_response_code(200);
        
        $videos = scandir("../../src/Sources", 1);
        $videoList = array();
        $counter = 0;
        foreach($videos as $video){
            if($video == '.' or $video == '..')continue;

            $vid = new \stdClass();
            $vid->source = $video;
            $vid->filename = $video;
            $vid->id = $counter;

            array_push($videoList, $vid);
            $counter++;
        }
        array_shift($videos);
        array_shift($videos);
        
        $myJSON = json_encode($videoList);
        echo $myJSON;
    }else{
        echo json_encode(["sent" => false, "message" => "Something went wrong"]);
    }

?>