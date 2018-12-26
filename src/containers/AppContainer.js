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
      saved: [],
      card: {},
      showCardModal: false,
    };
  }

  getCard = async id => {
    try {
      const res = await axios.get(`${this.API_BASE_URL}/card/${id}`);
      this.setState({card: res.data.data});
    } catch (error) {
      throw Error('Card Not Found')
    }
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
  
  showCardModal = (show=true) => {
    this.setState({showCardModal:show})
  }

  saveCard = card => {
		this.setState({
			saved: [...this.state.saved, card]
    });
  }

  removeCard = id => {
    var array = []
    if(id){
      array = [...this.state.saved]
      var index = array.indexOf(id)
      array.splice(index, 1);
    }
    this.setState({saved:array});
  }


}

export default AppContainer;
