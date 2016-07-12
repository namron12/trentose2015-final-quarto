/*
 * MonsterModel provides basic methods to iterate
 * over a collection of "monsters"  
 */
var MonsterModel = {
  
   /* Collection of available monsters */
   collection : monsters, 
  
   /* Start the iteration over the collection of monsters.
   it sets the first element as the current monster */    
   init : function() {
   },
  
   /*   Returns the current monster and sets as current monster
    * the next element in the array.
    * If no more monsters are available, it returns null
    */
   getCurrentMonster : function () { 
   },
  
   /* Checks if the name of the current monster 
    * is monsterName. It returns true if the user 
    * correctly named the monster, false otherwise
    */
   catchMonster : function (monsterName){
       
   }  
           
};

$(document).ready(function() {
    $(".catch").click(function() {
        var check = $("input[name='monsterName']").val();    
        if(check == "caterpie") {
            alert("Catched!");
       
            
            } else {
                
                alert("Sorry, master!");
                
                for(var i = 0; i < monsters.length; i++) {
                    $(".card").remove();
                    $(".card1").append("<div class='card'><h2>Monsters around you</h2> <img src='img/pikachu.png'><p><input type='text' name='monsterName' placeholder='Name the monster'></p><button class='catch'>Catch!</button></div>");
            };
        
        };
        
    });
});

    
    
    
    