<template>
<div class="row mt-5">
  <div class="col-md-6 mx-auto">
        <div class="card p-3 shadow-sm border border-2">
            <form>
                <span class="badge bg-warning mb-3"><h2 class="text-dark">Login Account</h2></span>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control border-warning border-0 border-bottom rounded-0 shadow-none" id="email">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control border-warning border-0 border-bottom rounded-0 shadow-none" id="exampleInputPassword1">
                </div>
                <div class="d-flex justify-content-start">
                    <button type="submit" class="btn btn-warning shadow-sm">Login</button>
                </div>
                
            </form>
        </div>
    </div>
</div>
</template>

<script>

export default {
    
}
</script>

<style>

</style>