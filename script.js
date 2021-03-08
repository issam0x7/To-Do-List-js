//Main Variables
let theInput=document.querySelector('.get-repos input'),
    ButtonGet=document.querySelector('.btn-repos'),
    showData=document.querySelector('.show-repos');

//Button Event
 
ButtonGet.addEventListener('click', function(){
    GetREPOS()
})
    // Get Repos Function
    function GetREPOS(){
        if(theInput.value == ''){
           showData.innerHTML='<span>Value Can\'t Be Empty</span>'
        }
        else{
            fetch(`https://api.github.com/users/${theInput.value}/repos`)

            .then(resp => resp.json())

            .then( (repositres) => {
               //Empty The Container Data
               showData.innerHTML=''
               //Loop On Repositres
                repositres.forEach(repositre => {
                    console.log(repositre.name);
                    //Create The Main Div 
                    let Maindiv= document.createElement('div'),
                        //Create Repo Name Text
                        RepoName=document.createTextNode('Repo Name : ' + repositre.name );
                        //Append The Text To  Main Div 
                        Maindiv.appendChild(RepoName);
                        //Create URL Element 
                    let URLLink=document.createElement('a');    
                        //Link The Repo
                    let TheLink=document.createTextNode('Link' ) ;
                    //Apeend Text URL
                        URLLink.appendChild(TheLink);
                        //Add The HeyperText Reference 
                        URLLink.href=`https://github.com/${theInput.value}/${repositre.name}`;
                        //set Attribute Blanck
                        URLLink.setAttribute('target' , '_blank');
                        //Append Link to Main Div 
                        Maindiv.appendChild(URLLink) ; 
                        //Craete Stars Count Span
                    let starsSpan=document.createElement('span'),
                        //Crete The stars Tetx     
                        Tetxstars=document.createTextNode(`stars ${repositre.stargazers_count}`);
                        //Add Stars Text 
                        starsSpan.appendChild(Tetxstars);
                        //Appned Stars Count to Main div 
                        Maindiv.appendChild(starsSpan)
                         // set class name
                         Maindiv.classList.add('box-show')
                        //Append The Main Div To  The Contianer
                        showData.appendChild(Maindiv);

                })
                
                
            });
        }
        }
    