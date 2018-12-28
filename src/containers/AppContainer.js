import { Container } from "unstated";
import axios from "axios";
import fileDownload from 'react-file-download'

class AppContainer extends Container {
  constructor() {
    super();
    this.API_BASE_URL = 'http://api.debate.cards/v1'
    // this.API_BASE_URL = 'http://localhost:8080/v1'
    this.state = {
      isSearchLoading: false,
      isCardLoading: false,
      search: [],
      saved: localStorage.getItem('saved') ? JSON.parse(localStorage.getItem('saved')) : [],
      card: {},
      showCardModal: false,
    };
  }

  getCard = async id => {
    this.setState({isCardLoading:true})
    try {
      const res = await axios.get(`${this.API_BASE_URL}/card/${id}`);
      this.setState({card: res.data.data});
    } catch (error) {
      throw Error('Card Not Found')
    } finally {
      this.setState({isCardLoading:false})
    }
  }

  search = async query => {
    this.setState({isSearchLoading: true});
    try {
      const res = await axios.get(`${this.API_BASE_URL}/search`, {params: query})
      this.setState({search: res.data.data});
    } catch (error) {
      throw Error('Search Failed')
    } finally {
      this.setState({isSearchLoading:false});
    }
  }
  
  download = async () => {
    var ids = this.state.saved.map((item) => item._id)
    try {
      const res = await axios.post(`${this.API_BASE_URL}/save`, {ids}, {responseType: 'blob'});
      fileDownload(res.data, 'Evidence.docx')
    } catch (error) {
      throw Error('Download Failed')
    }
  }
  downloadOne = async id => {
    try {
      const res = await axios.post(`${this.API_BASE_URL}/save`, {ids:[id]}, {responseType: 'blob'});
      fileDownload(res.data, 'Card.docx')
    } catch (error) {
      throw Error('Download Failed')
    }
  }
  showCardModal = (show=true) => {
    this.setState({showCardModal:show})
  }

  saveCard = card => {
    const newArr = [...this.state.saved, card];
		this.setState({
			saved: newArr
    });
    localStorage.setItem('saved',JSON.stringify(newArr))
  }

  removeCard = id => {
    var newArr = []
    if(id){
      newArr = [...this.state.saved]
      var index = newArr.indexOf(id)
      newArr.splice(index, 1);
    }
    this.setState({saved:newArr});
    localStorage.setItem('saved',JSON.stringify(newArr))
  }

  reorder = (list=this.state.saved, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    console.log(result)
    return result;
  };

}

export default AppContainer;
