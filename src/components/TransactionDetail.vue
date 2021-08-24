<template>
    <div>
        <h1> Đây là Transaction Detials</h1>

        <!-- Nhớ nhớ tên mặc định nó là như thế này đấy  cái to nhất là cái này -->
        <!-- <h2>{{$route}}</h2> -->

        <!--tại sao lại biết những cái này có trong $route mà gọi ra  .params.idddd thì
                -đầu tiên thì cần cho cái $route vào json rồi nhìn thấy thôi
                
        -->
        <h2>{{ $route.params.idddd}}</h2>
        
    </div>
</template>