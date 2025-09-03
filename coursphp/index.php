<?php  
$recetes=[
    [   
'eat'=>'couscous',
'auteur'=>'kenou',
    ],
    [
        'eat'=>'riz',
        'auteur'=>'ornella',

    ],
    [
'eat'=>'casoulet',
'auteur'=>'sena',
    ],
    [
'eat'=>'haricot',
'auteur'=>'bérénice',
    ]
    ];
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<ul>
    <?php for ($i=0; $i <=3 ; $i++) : ?>
     <li ><?php  echo $recetes[$i]['eat']. '('.$recetes[$i]['auteur'].')' ; ?></li>
 <?php endfor; ?>
</ul>
</body>
</html>
