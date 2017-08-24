import Vue from 'vue';
import Button from './components/Button';
import Icon from './components/Icon';
import Group from './components/Group';
import GroupTitle from './components/GroupTitle';
import Cell from './components/Cell';
import Flex from './components/Flex';
import FlexItem from './components/FlexItem';
// import Navbar from './components/Navbar';
// import Tabbar from './components/Tabbar';
// import TabbarItem from './components/TabbarItem';
import Mask from './components/Mask';
import Loading from './components/Loading';
import Checkbox from './components/Checkbox';
import CheckboxGroup from './components/CheckboxGroup';
import Radio from './components/Radio';
import RadioGroup from './components/RadioGroup';
// import Toggle from './components/Toggle';
// import InputNumber from './components/InputNumber';
// import InputText from './components/InputText';
// import InputTextarea from './components/InputTextarea';
// import Selector from './components/Selector';
// import SelectorOption from './components/SelectorOption';
// import InlineSelector from './components/InlineSelector';
// import InlineSelectorOption from './components/InlineSelectorOption';
// import Navigation from './components/Navigation';
// import NavigationItem from './components/NavigationItem';
// import Tag from './components/Tag';
// import Tip from './components/Tip';
// import HRule from './components/HRule';
// import BackToTop from './components/BackToTop';
// import Badge from './components/Badge';
// import Drawer from './components/Drawer';
// import DrawerItem from './components/DrawerItem';
// import SlideUp from './components/SlideUp';
// import SlideUpHeader from './components/SlideUpHeader';
// import SlideUpBody from './components/SlideUpBody';
// import SegmentedControl from './components/SegmentedControl';
// import SegmentedControlItem from './components/SegmentedControlItem';
// import Sidelip from './components/Sidelip';
import Media from './components/Media';
import MediaObject from './components/MediaObject';
import MediaBody from './components/MediaBody';
// import Card from './components/Card';
// import CardBody from './components/CardBody';
// import DatePicker from './components/DatePicker';
// import Searchbar from './components/Searchbar';
// import SearchbarBtn from './components/SearchbarBtn';
// import SearchbarPlaceholder from './components/SearchbarPlaceholder';
// import Picker from './components/Picker';
// import PickerOption from './components/PickerOption';
// import Loadmore from './components/Loadmore';
import Alert from './components/Alert';
// import Swipe from './components/Swipe';
// import SwipeItem from './components/SwipeItem';
// import Progressbar from './components/Progressbar';
// import Stepbar from './components/Stepbar';
// import StepbarItem from './components/StepbarItem';
// import Timeline from './components/Timeline';
// import TimelineItem from './components/TimelineItem';
// import Sticky from './components/Sticky';
// global utils
import toast from './utils/toast';
import { alert } from './utils/alert';
import loading from './utils/loading';
// directives
import disfavor from './directives/disfavor';

const impression = {
    Button,
    Group,
    GroupTitle,
    Cell,
    Flex,
    FlexItem,
    Icon,
    // Tag,
    // Tip,
    // HRule,
    // Badge,
    Media,
    MediaObject,
    MediaBody,
    // Card,
    // CardBody,
    // Swipe,
    // SwipeItem,
    // Navbar,
    // Tabbar,
    // TabbarItem,
    // Navigation,
    // NavigationItem,
    // Drawer,
    // DrawerItem,
    // SegmentedControl,
    // SegmentedControlItem,
    // SlideUp,
    // SlideUpHeader,
    // SlideUpBody,
    // Sidelip,
    // Searchbar,
    // SearchbarBtn,
    // SearchbarPlaceholder,
    // Picker,
    // PickerOption,
    // Loadmore,
    Mask,
    Alert,
    Loading,
    // BackToTop,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    // Toggle,
    // InputNumber,
    // InputText,
    // InputTextarea,
    // Selector,
    // SelectorOption,
    // InlineSelector,
    // InlineSelectorOption,
    // DatePicker,
    // Progressbar,
    // Stepbar,
    // StepbarItem,
    // Timeline,
    // TimelineItem,
    // Sticky,
};

const install = () => {
    // if(install.installed) return;

    // components
    Object.keys(impression).forEach(key => {
        Vue.component(impression[key].name, impression[key]);
    });

    // global component utils
    Vue.$toast = Vue.prototype.$toast = toast;
    Vue.$alert = Vue.prototype.$alert = alert;
    Vue.$loading = Vue.prototype.$loading = loading;

    // directives
    Vue.directive('disfavor', disfavor);
};

// if(typeof window !== 'undefined' && window.Vue) {
    // install(window.Vue);
// }
install();
export default impression;
