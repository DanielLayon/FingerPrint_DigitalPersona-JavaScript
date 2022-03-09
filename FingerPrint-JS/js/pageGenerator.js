// Daniel Layon - Page Generator
//This script generate the content dynamically
//I chose the jquery just to prove my knowledge but DOM is the better way

function page_main(){
    $('.blog').empty();

    // PRESENTATION POST
    $('.blog').append(
        `     
        <div class="post">
        <div class="post-owner">
            <div class="post-owner-photo-border">
                <img class="post-owner-photo" src="./img/Me.jpg" alt="Owner Photo">
            </div>
            <span class="post-owner-name">Daniel Layon</span>
        </div>
        <div class="post-owner-content">
            <div class="post-title">Presentation</div>
            <div class="post-content">
                <div class="post-content-left">
                    <p>
                        <img src="./img/Me.jpg" width="100" style="border-radius: 10px;float: left;margin-right: 10px;">
                        Hi, my name is Daniel Layon and i'm a developer of DataFlex, C#, JAVA, JS, PHP.<br>
                        I know other languages ​​and frameworks like React, ReactNative, Node, MYSQL and others but these are the ones I'm currently using for work and studies.
                     </p>
                    
                    <p>I created this page to extract all we can of the FingerPrint tecnology, in this case i'm using "U.are.U 4500 Fingerprint Reader", Each technology has its own lib.</p>                           
                    <p>The purpose of this site is to document all the processes related to the technology used and the challenges faced in building the application.</p>
                    <p>I built this same application with two other languages:<br>
                         &nbsp;&nbsp;&nbsp;&nbsp;Dataflex<br>
                         &nbsp;&nbsp;&nbsp;&nbsp;C#<br>
                         While building the application in C# I encountered difficulties but managed to complete it after a week of work.<br>
                         In Dataflex I found many difficulties and the available library was not very intuitive or easy to use but I managed to finish all the capture part.
                     </p>
                     <p>
                         I imagine that in javascript I will not encounter many difficulties, as it is a very flexible language.<br>
                         Enjoy !
                     </p>
                </div>
                <div class="post-content-right">
                    <p>Some languages ​​I've worked with!</p><br>
                    <img src="./img/languages/html.png" alt=""          style="width: 100px;margin-right: 40px;">
                    <img src="./img/languages/css.png" alt=""           style="width: 100px;margin-right: 40px;">
                    <img src="./img/languages/js.png" alt=""            style="width: 100px;margin-right: 40px;">
                    <img src="./img/languages/php.png" alt=""           style="width: 100px;margin-right: 40px;">
                    <img src="./img/languages/mysql.png" alt=""         style="width: 100px;margin-right: 40px;">
                    <img src="./img/languages/node-js.png" alt=""       style="width: 100px;margin-right: 40px;">
                    <img src="./img/languages/dataflex.ico" alt=""      style="width: 100px;margin-right: 40px;">
                    <img src="./img/languages/java.png" alt=""          style="width: 100px;margin-right: 40px;">
                    <img src="./img/languages/csharp.png" alt=""        style="width: 100px;margin-right: 40px;">
                    <img src="./img/languages/react-native.png" alt=""  style="width: 100px;margin-right: 40px;">
                    <img src="./img/languages/react.png" alt=""         style="width: 100px;margin-right: 40px;">
                    <p>
                        I love programming and finding challenges for myself.<br>
                        so I hope to know many more languages!
                    </p>
                </div>
                
            </div>
        </div>
    </div>`
    )

    //DOCUMENTATIO U.ARE.U
    $('.blog').append(
        `
        <div class="post">
            <div class="post-owner">
                <div class="post-owner-photo-border">
                    <img class="post-owner-photo" src="./img/Me.jpg" alt="Owner Photo">
                </div>
                <span class="post-owner-name">Daniel Layon</span>
            </div>
            <div class="post-owner-content">
                <div class="post-title">Documentation</div>
                <div class="post-content">
                    <div class="post-content-left">
                        <p>I got the device documentation by installing the necessary drivers.<br>
                            Along came several examples in several languages ​​and all libraries needed to work.</p>
                        <p>I will leave a winrar file with the drivers and a file with the documentation that I will be using.</p>
                    </div>
                    <div class="post-content-right">
                        <a href="./archives/drivers.rar" download="drivers" style="float: left;margin-right: 10%;text-decoration: none;">
                            <i>Drivers</i><br>
                            <img src="./img/winrar.png" style="width: 50px;">
                        </a>
                        <a href="./archives/documentation.pdf" download="drivers" style="float: left;margin-right: 5%;text-decoration: none;">
                            <i>Documentation</i><br>
                            <img src="./img/pdf.png" style="width: 50px;">
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
        `
    )

    //MODEL
    $('.blog').append(
        `
        <div class="post">
            <div class="post-owner">
                <div class="post-owner-photo-border">
                    <img class="post-owner-photo" src="./img/Me.jpg" alt="Owner Photo">
                </div>
                <span class="post-owner-name">Daniel Layon</span>
            </div>
            <div class="post-owner-content">
                <div class="post-title">Model</div>
                <div class="post-content">
                    <div class="post-content-left">
                        
                    </div>
                    <div class="post-content-right">
                        
                    </div>
                    
                </div>
            </div>
        </div>
        `
    )
}

function page_select(){
    
    
    $('.blog').empty();
    $('.blog').append(
        `
        <div class="post">
            <div class="post-owner">
                <div class="post-owner-photo-border">
                    <img class="post-owner-photo" src="./img/Me.jpg" alt="Owner Photo">
                </div>
                <span class="post-owner-name">Daniel Layon</span>
            </div>
            <div class="post-owner-content">
                <div class="post-title">Select</div>
                <div class="post-content">
                    <div class="post-content-left">
                        <p>
                            This page have 2 functions:<br>
                            1 - Frist you need select what device you want to capture.<br>
                            2 - Second you can get Info about you device.<br>
                        </p>
                        <br>
                        <p>
                            OBS: On select your device will active.<br>
                            We just need Select device and get info is optional.
                        </p>
                    </div>
                    <div class="post-content-right">
                        <p>
                            1 - Select your device.<br>
                            <input type="button" value="List Devices" onclick="GetDeviceList()">
                            <select class="device-list" style="margin-left: 10px;" onchange="">
                                <option value="Null">No devices found</option>
                            </select>
                        </p>
                        <br>
                        <p>
                            2 - Get information about your device.<br>
                            <input type="button" value="Get Info" onclick="GetInfo()">
                            
                        </p>
                        <p class="device-info" style="font-size: 3vh;">

                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
        `
    );


}


//Select event
function page_capture(){
    let uid = $('.device-list').text();
    uid = uid.toString();

    console.log(uid)
    console.log(uid.length)
    
    if(uid == "" || (uid.length == 0 || uid.length == 78)){
        alert("Select a Device Frist");        

    }else{
        $('.blog').empty();
        $('.blog').append(
            `
            <div class="post">
                <div class="post-owner">
                    <div class="post-owner-photo-border">
                        <img class="post-owner-photo" src="./img/Me.jpg" alt="Owner Photo">
                    </div>
                    <span class="post-owner-name">Daniel Layon</span>
                </div>
                <div class="post-owner-content">
                    <div class="uid" style="display:none;">${uid}</div>
                    <div class="post-title">Capture</div>
                    <div class="post-content">
                        <div class="post-content-left">
                            <p>
                                Here you can 'Start Capture' and 'Stop Capture'.<br>
                                <input type="Button" value="Capture" onclick="StartCapture()" style="margin-right:10px;">
                                <input type="Button" value="Stop" onclick="StopCapture()"><br>
                            </p>
                            <p>
                                On this sample i fix the format to PNG but you can use others 3 formats.<br>
                                Can use 'RAW', 'Intermediate', 'Compressed' and the 'PNG' format.<br>
                                The best way to discover and explore all fingerprint functionality is to debug the object itself.<br>
                                I use 'Console.log(Fingerprint)' after the imports of course.<br>
                                Enjoy!
                            </p>

                        </div>
                        <div class="post-content-right" style="display:flex;flex-direction:column;justify-content:center;">
                            <div class="status">Status</div><br><br>
                            <div class="image-div">
                                <Image class="image-data" src="">
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            `
        );
    }
}
page_main()
