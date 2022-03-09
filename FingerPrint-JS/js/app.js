// Daniel Layon - Fingerprint Functions
//This script i'll write all the function of the lib


this.sdk = new Fingerprint.WebApi;





//List all the devices avaible
function GetDeviceList(){
    
    sdk.enumerateDevices()
   .then((sucessOBJ)=>{

        //If found devices will list else show error alert
        if(sucessOBJ.length == 0){
            alert("No Devices Found !");
            $('.device-list').empty();
            $('.device-list').append(`<option class="devices" value="Null">No devices found</option>`);
        }else{
            $('.device-list').empty();
            for(let i = 0;i < sucessOBJ.length;i++){
                $('.device-list').append(`<option class="devices" value="device-${i+1}">${sucessOBJ[i]}</option>`);
            }
        }
   })
   .catch((err)=>{
        alert("No Devices Found !");
        $('.device-list').append(`<option class="devices" value="Null">No devices found</option>`);
   })
}

//Get all information about device
//Need params => 'deviceUid' : <uid>
function GetInfo(){
    let uid = $('.device-list').text();

    sdk.getDeviceInfo(uid)
    .then((sucessOBJ)=>{
        $('.device-info').empty();
        $('.device-info').append(
            `
            ID: ${sucessOBJ.DeviceID}<br>
            Technology: ${Fingerprint.DeviceTechnology[sucessOBJ.eDeviceTech]}<br>
            Modality: ${Fingerprint.DeviceModality[sucessOBJ.eDeviceModality]}<br>
            UID Type: ${Fingerprint.DeviceUidType[sucessOBJ.eUidType]}<br>
            `
        );
    })
    .catch((err)=>{
        $('.device-info').empty();
        $('.device-info').append(`No Info Found`);
        alert(err.message)
    })
}

function StartCapture(){
    let uid = $('.uid').text();

    sdk.startAcquisition(Fingerprint.SampleFormat.PngImage, uid)
    .then((sucessOBJ)=>{
        console.log("Capturing");
    })
    .catch((err)=>{
        alert(err.message);
    })
}

function StopCapture(){
    let uid = $('.uid').text();

    sdk.stopAcquisition(Fingerprint.SampleFormat.PngImage, uid)
    .then((sucessOBJ)=>{
        console.log("Stopping");
    })
    .catch((err)=>{
        alert(err.message);
    })
}

//OVERRIDE EVENTS
sdk.onDeviceConnected = function (e) {
    // Detects if the deveice is connected
    
};
sdk.onDeviceDisconnected = function (e) {
    // Detects if device gets disconnected
    alert("Device disconnected");
};
sdk.onCommunicationFailed = function (e) {
    // Detects if there is a failure in communicating with U.R.U web SDK
    alert("Communication Fail");
};
sdk.onSamplesAcquired = function (s) {
    // Sample acquired event triggers this function
    GetImage(s);
};
sdk.onQualityReported = function (e) {
    // Quality of sample aquired - Function triggered on every sample acquired
        // document.getElementById("qualityInputBox").value = Fingerprint.QualityCode[(e.quality)];
}

//MY EVENTS
function GetImage(s){
    //On this example i'm setting a fix type but you can use your brain !!!
    currentFormat = GetImageCurrentFormat();

    if(currentFormat == Fingerprint.SampleFormat.PngImage){
        var samples = JSON.parse(s.samples);
        localStorage.setItem("imageSrc","data:image/png;base64,"+ Fingerprint.b64UrlTo64(samples[0]));
        $(".image-div").empty();
        $(".image-div").append(`<Image class="image-data" src="${localStorage.getItem("imageSrc")}">`);
    }
}


function GetImageCurrentFormat(){
    //you can explore all the formats here
    return Fingerprint.SampleFormat.PngImage;
}