<script lang="ts">
    const asdf = async () => {
        const res = await fetch('/asdf', {method: 'POST'})
        alert(await res.json())
    }
</script>
<button on:click={asdf}>aasdf</button>
