import { Container } from "unstated";
import axios from "axios";
import fileDownload from 'react-file-download'

class AppContainer extends Container {
  constructor() {
    super();
    this.API_BASE_URL = 'http://192.168.1.163:8080/api'
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
    }
    this.setState({isCardLoading:false})
  }
  
  search = async query => {
    this.setState({isSearchLoading: true});
    try {
      const res = await axios.get(`${this.API_BASE_URL}/search`, {params: query})
      if ('error' in res.data) { throw Error('Bad Request') }; //tmp work around - server should send 4xx status on bad querey
      this.setState({search: res.data.data});
    } catch (error) {
      throw Error('Search Failed')
    }
    this.setState({isSearchLoading:false});
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


}

export default AppContainer;
