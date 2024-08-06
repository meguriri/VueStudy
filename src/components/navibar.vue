<template>
    <div id="navbar" class="fixed-top row px-2">
        <div class="col-2 pt-1 me-0">
            <h4>CommonsenseVIS</h4>
        </div>
        <div class="col-2 pt-2 px-0 mx-0" style="text-align: left;">
            <a href="#" class="text-white">what is CommonsenseVIS?</a>
        </div>
        <div class="col-3 offset-3 px-0 me-0" style="float: right;">
            <button type="button" class="btn btn-light text-secondary mx-1">
                <span>
                    <i class="bi bi-check-circle"></i>
                    Filter Stop Words
                </span>     
            </button>
            <button type="button" class="btn btn-light text-secondary mx-1">
                <span>
                    <i class="bi bi-card-list"></i>
                    Model Editing
                </span>
            </button>
        </div>
        <div class="col-2 px-0 mx-0" style="text-align:right;">
            <span >
                <a id="link-icon" href="#" class="text-white">
                    <i class="bi bi-info-circle-fill"></i>
                </a>
            </span>
            <span class="ms-3">
                <a id="link-icon" href="#" class="text-white">
                    <i class="bi bi-book-fill"></i>
                </a>
            </span>
            <span class="ms-3">
                <a id="link-icon" href="#" class="text-white">
                    <i class="bi bi-youtube"></i>
                </a>
            </span>
            <span class="ms-3 me-2">
                <a id="link-icon" href="#" class="text-white">
                    <i class="bi bi-github"></i>
                </a>
            </span>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style scoped>
    #navbar{
        background-color: rgb(48,61,78);
        padding: 10px 0px;
        color: #FFFFFF;
    }
    #link-icon{
        font-size: 30px;
    }
</style>