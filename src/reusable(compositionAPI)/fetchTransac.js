import { ref } from 'vue'
export default function() {
	const listData = ref([]);
	const error = ref(null);

    //Chú thích những cái này đã ở commit trước rồi nhá commit này thì xóa đi để thấy được
    //  sự tách biệt của Composition ( thấy được sự lợi hại của nó) và tái sử dụng ở nhiều nơi
	const getData = async () => {
		try {
			const run = await fetch("http://localhost:3000/listdata");
			if (!run.ok) throw new Error("Something went wrong");
			listData.value = await run.json();

		} catch (err) {
			error.value = err;
			console.log(error.value);
		}
	};

    //Sử dụng những cái nào thì mới trả về những cái đấy thôi nhá 
    //Ví dụ trên có 4, 5 function gì đó mà sử dụng có 1 thì return ra 1 thôi
	return {
		
		error,
		getData,
        listData,
	};

    //Có thể sử dụng bất kí ở đâu nhá 
    
}
