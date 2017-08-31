
import { Component, ElementRef, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonAPICall } from '../../shared/shared.service';
import { CommonFunction } from '../../shared/commonFunction';
import { SharedImg } from '../../shared/attachmentImg';
// import { ContactAdjusterComponent } from './contact-adjuster.component';

declare var navigator;
declare var Camera;
declare var cordova: any;
declare var plugins: any;


@Component({
  selector: 'claimInfoMessage',//'app-contact-adjuster1'
  templateUrl: 'claimInfoMessage.component.html',
  
  providers: [CommonAPICall, SharedImg,CommonFunction ]
})
export class ClaimInfoMessageComponent implements OnInit, OnDestroy {
 claims1:any[] = JSON.parse(sessionStorage.getItem('claims'));
 claimId = this.claims1[0].claim_id;
  claimNumber: string="";
  pageName = sessionStorage.getItem('pageName');
  name="";
  email="";
  attachmentDescription: string = "";
  profileImg: string[] = [];
  pdfImg = false;
  transperentImg = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  Message_email = sessionStorage.getItem('userName');
  targetObject: any;
  Message_name: string;
  Message_number: string;
  Message_subject: string;
  messageLength = 40;
  inputMessage: string=""; showCameraButton = false;

  // attachImg= new SharedImg();
  constructor(private route: Router,private element: ElementRef, private _commonApiCall: CommonAPICall
    , private changeDetectorRef: ChangeDetectorRef, private attachImg: SharedImg,private ComFunc:CommonFunction ) {
     if (navigator.userAgent.match(/Android/i) && typeof cordova != 'undefined') {
       this.showCameraButton = true;
     }
  }

  ngOnInit() {
    this.claimNumber=sessionStorage.getItem('claim_number');
    var routevar = this.route;
    this._commonApiCall.checkToken(routevar);

    // give loader the fixed position so that it always stay at center in this page
    var theElement = <HTMLElement>document.querySelector("#loadingDiv");
    theElement.style.position = "fixed";

    window.scrollTo(0, 0);
    if (this.pageName == "Adjuster") {
      this.name = sessionStorage.getItem('name');
      this.email = sessionStorage.getItem('email');
    }
    else {
      this.name = sessionStorage.getItem('superName');
      this.email = sessionStorage.getItem('superEmail');
    }
    var image1 = this.element.nativeElement.querySelector('.unknown1');
    image1.src = this.transperentImg;

  }

  ngOnDestroy() {
    var theElement = <HTMLElement>document.querySelector("#loadingDiv");
    theElement.style.position = "absolute";
  }

  //----------- open camera using cordova plugin  only in android starts------------------------------

  openCameraAndroid() {
    if (this.profileImg.length < 2) {
      var object = this;
      cordova.plugins.diagnostic.requestCameraAuthorization(function(status) {

        if (cordova.plugins.diagnostic.permissionStatus.GRANTED) {

          navigator.camera.getPicture(function(imageData) {
            object.onSuccess(imageData, object);
          }, object.onFail, {
              quality: 25,
              destinationType: Camera.DestinationType.FILE_URI
            });


        }
        else if (cordova.plugins.diagnostic.permissionStatus.DENIED) {
          console.log("denied");
        }

      }, function(error) {
        console.log(error);
      });
    }
    else {
      this.ComFunc.alertPopup("You cannot add more than 2 attachments.", "Message");
    }
  }


  onSuccess(imageData, obj) {
    // var image1 = obj.element.nativeElement.querySelector('.unknown1');
    // image1.src = imageData;
    this.pdfImg = false;
    var img2 = document.createElement("img");
    img2.src = imageData;
    obj.resize(img2, 750, 750, (resized_jpeg, before, after) => {
      // For debugging (size in bytes before and after)
      // this.debug_size_before.push(before);
      //this.debug_size_after.push(after);
      var image1 = this.element.nativeElement.querySelector('.unknown1');
      //alert(resized_jpeg);
      image1.src = resized_jpeg;
      sessionStorage.setItem('imgSrc', resized_jpeg);
      sessionStorage.setItem('imgName', "img_" + new Date() + '.jpg');
    //  alert(sessionStorage.getItem('imgName'));
      //console.log(sessionStorage.getItem('imgSrc'));
      //console.log(sessionStorage.getItem('imgName'));
      // Read the next file;
      //  obj.readFiles(files, index + 1);
    })





  }
  onFail(message) {
    this.ComFunc.alertPopup("Message",'Failed because: ' + message);
  }

 
  //----------- open camera using cordova plugin  only in android ends------------------------------


  //------------------------------CHANGE PROFILE IMAGE FUNCTION-----------------------------------

  profileImgChange(input) {
  //  alert(input.files[0]);
    var imgPhoto = this.element.nativeElement.querySelector('.unknown1');
    var inputFileName = this.element.nativeElement.querySelector('.inputFileName');
    var fileFormat = input.value.match(/\.([^\.]+)$/)[1].toLowerCase();
    let size = (input.files[0].size / 1024) / 1024;
    console.log(size);
    if (fileFormat == "jpeg" || fileFormat == "jpg" || fileFormat == "png" || fileFormat == "xls" || fileFormat == "xlsx"
      || fileFormat == "doc" || fileFormat == "docx" || fileFormat == "pdf") {

      if (input.files[0].type.match('image.*')) {
        this.pdfImg = false;
        if (this.profileImg.length < 2) {
          this.readFiles(input.files);
        }
        else {
          this.ComFunc.alertPopup("You can not add more than 2 attachments", "Message");
        }
      }
      else {
        if (this.profileImg.length < 2) {
          if (input.files.length > 0 && size < 1) {
            this.getBase64(input.files[0]);
            sessionStorage.setItem('imgName', input.files[0].name);
            let image1 = this.element.nativeElement.querySelector('.unknown1');
            switch (fileFormat) {
              case "pdf":
                image1.src = this.attachImg.pdf;
                sessionStorage.setItem('attachImage', this.attachImg.pdf);
                break;
              case "doc":
                image1.src = this.attachImg.doc;
                sessionStorage.setItem('attachImage', this.attachImg.doc);
                break;
              case "docx":
                image1.src = this.attachImg.doc;
                sessionStorage.setItem('attachImage', this.attachImg.doc);
                break;
              case "xls":
                image1.src = this.attachImg.xls;
                sessionStorage.setItem('attachImage', this.attachImg.xls);
                break;
              case "xlsx":
                image1.src = this.attachImg.xls;
                sessionStorage.setItem('attachImage', this.attachImg.xls);
                break;
            }

            this.pdfImg = true;
            //console.log(this.getBase64(input.files));
          }
          else {
            imgPhoto.src = this.transperentImg;
            inputFileName.value = '';
            this.ComFunc.alertPopup("File size should not be more than 1 mb.", "Message");
          }
        }
        else {
          imgPhoto.src = this.transperentImg;
          inputFileName.value = '';
          this.ComFunc.alertPopup("You can not add more than 2 attachments", "Message");
        }
      }
    }
    else {
      imgPhoto.src = this.transperentImg;
      inputFileName.value = '';
      this.ComFunc.alertPopup("File format not supported", "Message");
    }

  }

  //-----------------------------
  readFile(file, reader, callback) {
    reader.onload = () => {
      callback(reader.result);
    }

    reader.readAsDataURL(file);
  }
  //----------------------------------------------
  readFiles(files, index = 0) {
    //console.log(files);
    // Create the file reader
    let reader = new FileReader();

    // If there is a file
    if (index in files) {
      // Start reading this file
      //console.log(files[0].name);
      this.readFile(files[index], reader, (result) => {
        // Create an img element and add the image file data to it
        //console.log(files[index].name);
        sessionStorage.setItem('imgName', files[index].name);
        var img = document.createElement("img");
        img.src = result;

        // Send this img to the resize function (and wait for callback)
        this.resize(img, 750, 750, (resized_jpeg, before, after) => {
          // For debugging (size in bytes before and after)
          //this.debug_size_before.push(before);
          //this.debug_size_after.push(after);
          let image1 = this.element.nativeElement.querySelector('.unknown1');
          image1.src = resized_jpeg;
          sessionStorage.setItem('imgSrc', resized_jpeg);
          //console.log(before+" ,"+after);
          // Add the resized jpeg img source to a list for preview
          // This is also the file you want to upload. (either as a
          // base64 string or img.src = resized_jpeg if you prefer a file).
          //this.file_srcs.push(resized_jpeg);

          // Read the next file;
          this.readFiles(files, index + 1);
        });
      });
    } else {
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
    //----------------------------------------------------


  }
  //------------------------------CHANGE PROFILE IMAGE FUNCTION END-----------------------------------
  categories = ['Mileage Reimbursement', 'Prescription Reimbursement', 'Other'];
  selectedItem = this.categories[0];
  i: number;
  dropboxitemselected(i,dropdownList) {
    this.selectedItem = this.categories[i];
    dropdownList.style.display="none";

  }
  dropdownFunct(dropdownList){
    if(dropdownList.style.display=="none"){
      dropdownList.style.display="block";
      window.addEventListener("click",()=>{
      dropdownList.style.display="none";
    })
    }
    else{
      dropdownList.style.display="none";
    }
    
  }
  //--------------------------------------UPLOAD DOC SAVE START----------------------------------------
  uploadDocSave(img11, img12, imgPhoto) {
    var imgSrc = sessionStorage.getItem('imgSrc');
    var imgName = sessionStorage.getItem('imgName');
    //alert(imgSrc);
    if (imgSrc == '' || imgSrc == undefined) {
      this.ComFunc.alertPopup("Attachment is required", "Message");
    }
    else {
      var imgObj = {
        src: imgSrc, name: imgName, categorie: this.selectedItem,
        attachmentDescription: this.attachmentDescription
      }
      sessionStorage.setItem('attachedDetails', JSON.stringify(imgObj));

      //----------------------ALL IMAGE VIEW REFERENCE------------------------------------
      var inputFileName = this.element.nativeElement.querySelector('.inputFileName');
      var listpreview1 = this.element.nativeElement.querySelector('.listpreview1');
      var listpreview2 = this.element.nativeElement.querySelector('.listpreview2');
      var imagepreview1 = this.element.nativeElement.querySelector('.imagepreview1');
      var imagepreview2 = this.element.nativeElement.querySelector('.imagepreview2');

      console.log("Profile Image length :" + this.profileImg.length);

      //------CONDITION FOR ATTACHING FIRST PREVIEW AND SECOND PREVIEW IMAGES------------------

      if (this.profileImg.length <= 2 && (img11.src == this.transperentImg || img11.src == '')) {
        //console.log(JSON.parse(sessionStorage.getItem('attachedDetails')).src);
        if (this.pdfImg == true) {
          imagepreview1.src = sessionStorage.getItem('attachImage');
        }
        else {
          imagepreview1.src = JSON.parse(sessionStorage.getItem('attachedDetails')).src;
        }

        this.profileImg.push(sessionStorage.getItem('attachedDetails'));
        listpreview1.style.display = 'block';
        //var canvas = this.element.nativeElement.querySelector('.capturedPhotoSpeakerPhotoEdit');
        var main_image_view = this.element.nativeElement.querySelector('.unknown1');
        imgPhoto.src = this.transperentImg;
        //image1.style.display = 'none';
        //canvasPhoto.src = '';
        //canvas.style.display = 'none';
        sessionStorage.setItem('imgSrc', '');
        sessionStorage.setItem('imgName', '');
        sessionStorage.setItem('attachImage', '');
        this.attachmentDescription = "";
        console.log("Profile Image length:" + this.profileImg.length);
        inputFileName.value = '';
        this.messageLength = 40;
        this.pdfImg = false;
      }
      else if (this.profileImg.length <= 2 && (img12.src == this.transperentImg || img12.src == '')) {
        if (this.pdfImg == true) {
          imagepreview2.src = sessionStorage.getItem('attachImage');
        }
        else {
          imagepreview2.src = JSON.parse(sessionStorage.getItem('attachedDetails')).src;
        }
        console.log(JSON.parse(sessionStorage.getItem('attachedDetails')).name);
        this.profileImg.push(sessionStorage.getItem('attachedDetails'));

        listpreview2.style.display = 'block';

        var main_image_view = this.element.nativeElement.querySelector('.unknown1');
        imgPhoto.src = this.transperentImg;
        sessionStorage.setItem('imgSrc', '');
        sessionStorage.setItem('imgName', '');
        sessionStorage.setItem('attachImage', '');
        this.attachmentDescription = "";
        console.log("Profile Image length:" + this.profileImg.length);
        inputFileName.value = '';
        this.messageLength = 40;
        this.pdfImg = false;
      }
    }
  }
  //--------------------------------------UPLOAD DOC SAVE END----------------------------------------

  deletePreview1(img1) {

    this.profileImg.splice(0, 1);
    img1.src = this.transperentImg;

    var listpreview1 = this.element.nativeElement.querySelector('.listpreview1');
    var deleteImage1 = this.element.nativeElement.querySelector('.deleteImage1');
    listpreview1.style.display = 'none';
  }
  deletePreview2(img2) {

if(this.profileImg.length > 1){
    this.profileImg.splice(1, 1);
  }
  else{
    this.profileImg = [];
  }
    img2.src = this.transperentImg;

    var listpreview2 = this.element.nativeElement.querySelector('.listpreview2');
    var deleteImage2 = this.element.nativeElement.querySelector('.deleteImage2');
    listpreview2.style.display = 'none';

  }
  //--------------------------------FINAL UPLOAD PHOTO AND DATA METHOD------------------------
  sendMessageData(img1, img2, imgPhoto) {
    console.log(this.inputMessage);
    
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var token = sessionStorage.getItem('token');

    if (this.Message_name == '' || this.Message_name == undefined) {
      this.ComFunc.alertPopup("Name is required", "Message");
    }
    else if (this.Message_email == '' || this.Message_email == undefined || !re.test(this.Message_email)) {
      this.ComFunc.alertPopup("Enter a valid email ( abc@example.com )", "Message");
    }
    else if (this.Message_number == '' || this.Message_number == undefined || this.Message_number.toString().length < 10) {
      this.ComFunc.alertPopup("Contact Number should be of 10 digit", "Message");
    }
    else if (this.Message_subject == '' || this.Message_subject == undefined) {
      this.ComFunc.alertPopup("Message Subject is required", "Message");
    }
    else if (this.inputMessage == '' || this.inputMessage == undefined) {
      this.ComFunc.alertPopup("Message is required", "Message");
    }
    // else if (this.email == '' || this.email == undefined || !re.test(this.email)) {
    //   this.ComFunc.alertPopup("Recipient email address is missing.", "Message");
    // }
    else {

      if (imgPhoto.src !== this.transperentImg) {
        document.getElementById("modalOpen").click();
      }
      else {
        this.messageApiCall();
      }
    }
  }
  //-----------------------------------------------Reset Information Method-------------------------------------------------
  clearClaimInfoData(img1, img2, imgPhoto) {
    var inputFileName = this.element.nativeElement.querySelector('.inputFileName');
    var listpreview1 = this.element.nativeElement.querySelector('.listpreview1');
    var listpreview2 = this.element.nativeElement.querySelector('.listpreview2');

    this.profileImg = [], img1.src = this.transperentImg, img2.src = this.transperentImg, inputFileName.value = '', this.messageLength = 40,
      this.selectedItem = this.categories[0], imgPhoto.src = this.transperentImg, this.attachmentDescription = "", this.pdfImg = false;
    sessionStorage.setItem('imgSrc', '');
    sessionStorage.setItem('imgName', '');
    listpreview1.style.display = "none";
    listpreview2.style.display = "none";

  }
  //-----------------------------------------------Reset Information Method-------------------------------------------------

  resize(img, MAX_WIDTH: number, MAX_HEIGHT: number, callback) {
    // This will wait until the img is loaded before calling this function
    return img.onload = () => {

      // Get the images current width and height
      var width = img.width;
      var height = img.height;

      // Set the WxH to fit the Max values (but maintain proportions)
      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      // create a canvas object
      var canvas = document.createElement("canvas");

      // Set the canvas to the new calculated dimensions
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d");

      ctx.drawImage(img, 0, 0, width, height);

      // Get this encoded as a jpeg
      // IMPORTANT: 'jpeg' NOT 'jpg'
      var dataUrl = canvas.toDataURL('image/jpeg');

      // callback with the results
      callback(dataUrl, img.src.length, dataUrl.length);
    };
  }
  //------------------------------------------------------------------Character count method start----------------------------------------------------------
  charCount(inputMessage) {
    let inputLength = inputMessage.length;
    this.messageLength = 40 - inputLength;
  }
  //------------------------------------------------------------------Character count method end----------------------------------------------------------
  messageApiCall() {
    var token = sessionStorage.getItem('token');
    var img1 = this.element.nativeElement.querySelector('.imagepreview1');
    var img2 = this.element.nativeElement.querySelector('.imagepreview2');

    if (this.profileImg.length === 0) {
      var attachmentsName = "", attachmentsCateg = "", attachmentsSrc = "", attachmentsDisc = "";
      var attachmentsName1 = "", attachmentsCateg1 = "", attachmentsSrc1 = "", attachmentsDisc1 = "";
    }
    else if (this.profileImg.length === 1) {
      console.log(this.profileImg.length);
      attachmentsName = JSON.parse(this.profileImg[0]).name;
      attachmentsCateg = JSON.parse(this.profileImg[0]).categorie;
      attachmentsSrc = JSON.parse(this.profileImg[0]).src.substr(JSON.parse(this.profileImg[0]).src.indexOf(',') + 1);
      attachmentsDisc = JSON.parse(this.profileImg[0]).attachmentDescription;
      attachmentsName1 = "", attachmentsCateg1 = "", attachmentsSrc1 = "", attachmentsDisc1 = "";
    }
    else {
      attachmentsName = JSON.parse(this.profileImg[0]).name;
      attachmentsCateg = JSON.parse(this.profileImg[0]).categorie;
      attachmentsSrc = JSON.parse(this.profileImg[0]).src.substr(JSON.parse(this.profileImg[0]).src.indexOf(',') + 1);
      attachmentsDisc = JSON.parse(this.profileImg[0]).attachmentDescription;

      attachmentsName1 = JSON.parse(this.profileImg[1]).name;
      attachmentsCateg1 = JSON.parse(this.profileImg[1]).categorie;
      attachmentsSrc1 = JSON.parse(this.profileImg[1]).src.substr(JSON.parse(this.profileImg[1]).src.indexOf(',') + 1);
      attachmentsDisc1 = JSON.parse(this.profileImg[1]).attachmentDescription;
    }

    var data =
      {
        "email_Method": "Smart",
        "to_email_address": "dgupta@primussoft.com",
        "from_email_address": this.Message_email + ' <' + this.Message_email + '>',
        "subject_Text": this.Message_subject + ' Broadspire IQ Claim #: ' + this.claimNumber,
        "body_Text": this.inputMessage + '<br/>' + '<br/>' + '<b>' + ' Contact Phone Number: ' + '</b>' + this.Message_number + '<br/>',
        "claim_Id": sessionStorage.getItem("claimId"),
        "attachments": [
          {
            "attachmentName": attachmentsName,
            "attachmentCategory": attachmentsCateg,
            "attachmentContent": attachmentsSrc,
            "attachmentDescription": attachmentsDisc
          },
          {
            "attachmentName": attachmentsName1,
            "attachmentCategory": attachmentsCateg1,
            "attachmentContent": attachmentsSrc1,
            "attachmentDescription": attachmentsDisc1
          }
        ]
      }
    //console.log(attachmentsSrc);
    console.log(data);
    this._commonApiCall.postService("emails", "Bearer " + token, "application/json", data)
      .subscribe(res => {
        this.ComFunc.alertPopup(res.result.email_status, "Message");
        // Clear form after send mail.
        this.Message_name = "", this.Message_number = "", this.Message_subject = "", this.inputMessage = "";
        var inputFileName = this.element.nativeElement.querySelector('.inputFileName');
        var imgPhoto = this.element.nativeElement.querySelector('.unknown1');
        var listpreview1 = this.element.nativeElement.querySelector('.listpreview1');
        var listpreview2 = this.element.nativeElement.querySelector('.listpreview2');

        this.profileImg = [], img1.src = this.transperentImg, img2.src = this.transperentImg, inputFileName.value = '', this.messageLength = 40,
          this.selectedItem = this.categories[0], imgPhoto.src = this.transperentImg, this.attachmentDescription = "", this.pdfImg = false;
        sessionStorage.setItem('imgSrc', '');
        sessionStorage.setItem('imgName', '');
        listpreview1.style.display = "none";
        listpreview2.style.display = "none";
        //console.log(res);
      },
      error => {
        this._commonApiCall.handleError(error, "Message");
      })
  }
  //--------------------------------------------------------Find base64 of choose files start-------------------------------------------------------
  getBase64(file) {
    let result: EventTarget;
    console.log("inside");
    var reader = new FileReader();
    // reader.readAsDataURL(file);
    // alert(reader.result);
    // reader.onloadend = () => {
    //   console.log(reader);
    //   //result = reader.result;
    //   sessionStorage.setItem('imgSrc', reader.result);
    //
    // };
    reader.onload = function(e: any) {
      //alert("1");
      //console.log(e.currentTarget.result);
      // data:image/png;base64,...
      sessionStorage.setItem('imgSrc', reader.result);
    };
    reader.onloadend = function(e: any) {
      //alert("2");
      //console.log(e.currentTarget.result);
      // data:image/png;base64,...
      sessionStorage.setItem('imgSrc', reader.result);
    };
    reader.readAsDataURL(file);
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }
  //--------------------------------------------------------Find base64 of choose files end-------------------------------------------------------
  
}
