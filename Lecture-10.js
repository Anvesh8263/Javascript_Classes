function step1(step2) {
    setTimeout(() => {
      console.log('Image Selected');
      step2('image');
    }, 4000);
  }
  function step2(image, step3) {
    setTimeout(() => {
      console.log('Filter Applied');
      // return 'Filter Image';
      step3('filter Image');
    }, 3000);
  }
  function step3(filter, step4) {
    setTimeout(() => {
      console.log('Caption Applied');
      // return 'Caption Image';
      step4('Caption Image');
    }, 2000);
  }
  function step4(caption) {
    setTimeout(() => {
      console.log('Image Uploaded');
    });
  }
  step1(image => {
    step2(image, filter => {
      step3(filter, caption => {
        step4(caption);
      });
    });
  });
