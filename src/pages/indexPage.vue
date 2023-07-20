<template>
  <div class="indexPage">
    <section class="main">
      <div class="container main-container left-main">
        <div class="left-container">
          <div class="article-list">
            <div class="article-item">
              <div class="article-item-main">
                <div class="article-info">
                    <a href="" class="article-title">新年快乐</a>
                     <span>发布于 2023-01-16 16:16:29</span>
                    <div>祝大家新年快乐</div>
                </div>
                <div class="article-meta">
                    <div class="article-meta-left">
                        <span class="article-meta-item">
                            <a href="" class="article-author">
                                <span> C。</span>
                            </a>
                           
                        </span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main {
  padding: 1rem;
  .main-container {
    display: flex;
    .left-container {
      width: calc(100% - 330px);
    }
  }
  .container {
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    // width: auto;
    width: 1200px;
  }
}
</style>