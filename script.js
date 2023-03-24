function nestarr(arr1,arr2)
{
    let arr1min=arr1[0];
    let arr2min=arr2[0];
    let arr1max=arr1[0];
    let arr2max=arr2[0];
    for(let i=0;i<arr1.len;i++)
    {
        if(arr1[i]<arr1min)
        {
            arr1min=arr1[i];
        }
        if(arr1[i]>arr1max)
        {
            arr1max=arr1[i];
        }
    }
    for(let i=0;i<arr2.len;i++)
    {
        if(arr2[i]<arr2min)
        {
            arr2min=arr2[i];
        }
        if(arr2[i]>arr2max)
        {
            arr2max=arr2[i];
        }
    }
    return(arr1min>arr2min && arr1max < arr2max);
}
    let arr1=[1,5,2,0];
    let arr2=[2,8,-6,-3];

    if(nestarr(arr1,arr2))
    console.log("True");
    else
    console.log("False");
