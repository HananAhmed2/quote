var arr=[{'quote':"'Do not take life too seriously. You will not get out alive.'",
           'author':"--Elbert Hubbard"},
           {'quote':"'It's not what happens to you, but how you react to it that matters.'",
           'author':"--Epictetus"},
           {'quote':"'You miss 100% of the shots you don't take.'",
           'author':"--Wayne Gretzy"},
           {'quote':"'Resentment is like drinking poison and waiting for your enemies to die.'",
           'author':"--Nelson Mandela"},
           {'quote':"'The best revenge is massive success.'",
           'author':"--Frank Sinatra"}
        ];
        function generateQuote(){
            var num=Math.floor(Math.random()*arr.length)
            console.log(num)
            document.getElementById("quoteOutput").innerHTML=arr[num].quote
            document.getElementById("authorOutput").innerHTML=arr[num].author
        } 