<script>
    import Card from "../components/atom/Card.svelte";
    import { route } from "../stores/stores";
</script>


<div class="topStats">
    <div class="stat">
        <Card>
            <div class="statNumber one">10 986</div>
            <div class="statTitle">posts analyzed</div>
        </Card>
    </div>
    <div class="stat">
        <Card>
            <div class="statNumber two">143</div>
            <div class="statTitle">entities</div>
        </Card>
    </div>
    <div class="stat">
        <Card>
            <div class="statNumber three">56</div>
            <div class="statTitle">threads</div>
        </Card>
    </div>
</div>

<style lang="scss">
    .topStats {
        display: flex;
        justify-content: space-around;
    }
    .stat {
        width: 30%;
        margin: 10px;
        text-align: end;
    }
    .statNumber {
        font-style: normal;
        font-weight: 400;
        font-size: 72px;
        line-height: 100px;
    }
    .statTitle {
        font-size: 20px;
        color: $dark;
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 35px;
    }
    .one {
        color: $primary;
    }
    .two {
        color: $colorTwo;
    }
    .three {
        color: $colorThree;
    }
</style>
