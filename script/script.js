const smsinfo = document.querySelector('#smsinfo');
const imagebtn = document.querySelector('#imagebtn');
const paxis = document.querySelectorAll('.paxis');
const imagename = document.querySelector('#imageeditor');
const warnsms = document.querySelector('.warnsms');
const save_image = document.querySelector('#save_image');

  function hexTorgb(hex) {
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
  }

  save_image.disabled = true;

  imagebtn.addEventListener('click',imageeditor);

  function imageeditor(e){
        e.preventDefault();
        var top = document.querySelector('#top').value;
        var left = document.querySelector('#left').value;
        var text = document.querySelector('#textinput').value;
        var imageeditorlen = imagename.files['length'];
        save_image.disabled = true;
        
        if(imageeditorlen == 0 || text == '')
        {
            return;
        }


        var ext = imagename.files[0].type.split('/')[1];
        if(ext === 'png' || ext === 'jpeg' || ext === 'gif')
        {
            console.log(imagename.files[0].type);
        }else {
            warnsms.classList.add('imageextwarn');
            console.log(imagename.files[0].type);
            setTimeout(()=>warnsms.classList.remove('imageextwarn'),3000);
            return;
        }

        
        if(top == '' )
            top = 0;
        if(left == '')
            left = 0;

        [R, G, B] = hexTorgb(document.querySelector('.clrpicker').value);
              
    
        imagebtn.innerText = 'Processing...';
        document.querySelector('#imagediv').innerHTML = `<div class="text-center">
        <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>`;
        const xhr = new XMLHttpRequest();
        
        xhr.open('POST','add_text_to_image.php',true);
        xhr.responseType = 'blob';
        xhr.onload = ()=>{
            if(xhr.status === 200)
            {
                console.log(xhr.response);
                var blb = new Blob([xhr.response]);
                var url = (window.URL || window.webkitURL).createObjectURL(blb);
    
                document.querySelector('#imagediv').innerHTML = `<a href="${url}" download="gauravsolo_image.${ext}"><img src="${url}"  style="width:100%;height:100%;object-fit:content;"></a>`;
                document.querySelector('#aimg').setAttribute('href',url);
                document.querySelector('#aimg').setAttribute('download',`gauravsolo_image.${ext}`);
                imagebtn.innerText = 'Submit';
                save_image.disabled = false;
            }
        };
        
        const formdata = new FormData(document.querySelector('#imageform'));
        formdata.append('R',R);
        formdata.append('G',G);
        formdata.append('B',B);
        formdata.append('ext',ext);

        console.log([...formdata]);
        xhr.send(formdata); 
  }

paxis.forEach((element)=>{
    element.addEventListener('input',()=>{
        imagebtn.click();
        document.querySelector('#textinput').style = `color:${document.querySelector('.clrpicker').value} !important`;
    })
});
document.querySelector('#rotationtext').addEventListener('change',()=>imagebtn.click());
document.querySelector('#rotationimage').addEventListener('change',()=>imagebtn.click());