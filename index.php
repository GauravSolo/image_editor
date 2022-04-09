<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/styles.css"/>
  </head>
  <body style="margin:0 !important; padding:0 !important;">

    <h1 style="color:purple;text-align:center;border-bottom:1px solid;">Add Text to Image</h1>
            <div class="container px-0 mt-5">
                  <div class="row">
                          <div class="col-12 col-sm-9 mx-auto"  id="imagemodal">
                            <form method="POST" enctype="multipart/form-data" id="imageform">
                                  <div class="row">

                                        <div class="col-12 ">
                                            <div class="row">
                                                  <div class=" col-3 d-flex align-items-center">    
                                                    <label for="" class="label fs-5 nowrap" >Choose Image :</label>  
                                                  </div>                      
                                                  <div class=" col-7 ms-auto d-flex flex-column my-2 p-0">
                                                      <input class="label form-control me-auto" type="file" id='imageeditor' name='imageeditor'>
                                                  </div>
                                                  <div class="col-12 d-none warnsms">
                                                    <div class="text-danger  text-center" style="width:100%;">Only Extensions jpeg,jpg,png,gif are allowed.</div>
                                                  </div>
                                            </div>
                                        </div>
                                        <div class="col-12 my-2">
                                                <div class="row">
                                                  <div class=" col-3 d-flex align-items-center">    
                                                    <label for="" class="label fs-5 nowrap" >Add Text :</label>  
                                                  </div>                      
                                                  <div class=" col-7 ms-auto  my-2 mx-0 px-0 d-flex">
                                                            <input class="form-control   ms-auto" type="text" id="textinput" name="texteditor">
                                                            <input type="color" style="width:70px;height:100%;" class="form-control clrpicker paxis" >
                                                    
                                                  </div>
                                                </div>
                                        </div>                                      
                                        <div class="col-12">
                                          <div class="row">
                                              <div class="col-12 col-lg-7 ">
                                                    <div class="row">
                                                        <div class=" col-3 d-flex align-items-center">    
                                                          <label for="" class="label fs-5 nowrap " >Position :</label>  
                                                        </div>                      
                                                        <div class="  my-2 col-8 ms-auto mx-0 px-sm-0">
                                                            <div class="row">
                                                              <div class="col-6  ms-auto  d-flex justify-content-center align-items-center">
                                                                <label for="" class="label nowrap"> Top : &nbsp</label> <input class="paxis form-control d-inline-block" style="width:75px;height:38px;" type="number" name="top" id="top" value='100'>
                                                              </div>
                                                              <div class="col-6   px-0 d-flex justify-content-center align-items-center">
                                                                <label for="" class="label nowrap">  Left : &nbsp </label><input class="paxis form-control d-inline-block" style="width:75px;height:38px;" type="number" name="left" id="left" value='100'>
                                                              </div>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                            </div>
                                            <div class="col-12 col-lg-5 ms-auto">
                                                <div class="row">
                                                      <div class=" col-6 d-flex align-items-center justify-content-lg-end">    
                                                        <label for="" class="label fs-5 nowrap" >Font Size :</label>  
                                                      </div>                      
                                                      <div class=" col-5 ms-auto d-flex my-2 p-0">
                                                          <input class="label form-control me-auto paxis" type="number" id='fonteditor' min="5" value="100" style="width:75px;" name='fonteditor'>
                                                          
                                                      </div>
                                                </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-12 my-2">
                                            <div class="row">
                                                  <div class=" col-3 d-flex align-items-center">    
                                                    <label for="" class="label fs-5 nowrap" >Text Rotation :</label>  
                                                  </div>                      
                                                  <div class=" col-7 ms-auto  my-2 p-0">
                                                      <input class="form-range me-auto" type="range" min='-180' max='180' value='0' id='rotationtext' class="paxis" name='rotationtext'>
                                                      <div class="d-flex w-100 justify-content-between">
                                                        <span>
                                                          -180
                                                        </span>
                                                        <span class='pe-1'>
                                                          0
                                                        </span>
                                                        <span>
                                                          180
                                                        </span>
                                                      </div>
                                                  </div>
                                            </div>
                                        </div>
                                        <div class="col-12 my-2">
                                            <div class="row">
                                                  <div class=" col-3 d-flex align-items-center">    
                                                    <label for="" class="label fs-5 nowrap" >Image Rotation :</label>  
                                                  </div>                      
                                                  <div class=" col-7 ms-auto  my-2 p-0">
                                                      <input class="form-range me-auto" type="range" min='-180' max='180' value='0' step="90" id='rotationimage' class="paxis" name='rotationimage'>
                                                      <div class="d-flex w-100 justify-content-between">
                                                        <span>
                                                          -180
                                                        </span>
                                                        <span style="margin-left:-18px;">
                                                          -90
                                                        </span>
                                                        <span>
                                                          0
                                                        </span>
                                                        <span style="margin-right:-14px;">
                                                          90
                                                        </span>
                                                        <span>
                                                          180
                                                        </span>
                                                      </div>
                                                  </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                                        <button type="submit" id="imagebtn"  class="btn text-white  ms-auto float-end" style="background:rgb(255 163 67);font-size:15px;cursor:pointer;">Submit</button>
                                        </div>
                                        <div class="col-12 col-sm-7 mx-auto my-3" id="imagediv">
                                        </div>
                                      
                                    </div>
                              </form>
                          </div>
                          <div class="col-12 col-sm-9 mx-auto d-flex justify-content-end">
                            <a href='#' id="aimg"><button type="button" id="save_image" class="btn btn-primary">Save <i class="fas fa-download"></i></button></a>
                          </div>
                  </div>
            </div>


            
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script src="https://kit.fontawesome.com/3785baa6f3.js" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <script src="script/script.js"> </script>
  </body>
</html>
