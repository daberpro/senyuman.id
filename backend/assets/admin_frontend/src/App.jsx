import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Textarea,
  Checkbox,
  DialogFooter,
} from "@material-tailwind/react";
import MyNavbar from "./Navbar";
import a from './assets/a.svg'
import { useEffect, useState } from "react";
import { createContext } from "react";
import { Observer as _Obs } from "./observer";
import { useContext } from "react";
import { useMemo } from "react";
import { Alert, AlertSet } from "./Alert";

const Observer = createContext(new _Obs);
export const useObserver = () => {
  return useContext(Observer);
}

async function getData(url, headers, method, body, cb) {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      ...headers,
    },
  };
  if (method !== "get") config['body'] = JSON.stringify(body);
  const data = await fetch(url, config);

  if (data.status === 200) {
    cb(await data.json());
  }

}

function ContentEdit({ handleOpen, updateContent, open, data, content, openForm }) {
  const { title, description } = data || {};
  const allKeys = Object.keys(content[0] || {});
  const _Observer = useObserver();
  return (
    <Dialog className="h-full flex justify-between items-start flex-col overflow-y-auto" size="xxl" open={open} handler={handleOpen}>
      <DialogHeader className="w-full h-[10vh]">{(title || "")}</DialogHeader>
      <DialogBody className="flex h-[80vh] flex-col flex-none gap-5 w-full" divider>
        {(description || "")}
        <div className="overflow-auto h-[100%] relative w-full">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {
                  allKeys.map((d, i) => {
                    return <th key={i} scope="col" className="py-3 px-6">
                      {d}
                    </th>
                  })
                }
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                content.map((d, i) => {
                  return <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    {
                      allKeys.map((e, _i) => {
                        return <td key={_i} className="py-4 px-6">
                          {d[e]}
                        </td>
                      })
                    }
                    <td className="p-[20px] flex items-center justify-center gap-5 flex-wrap">
                      <Button color="indigo" className="w-full" variant="outlined" onClick={() => {
                        _Observer.Emit("Edit-Data", { content, id: i, data });
                      }}>Edit</Button>
                      <Button onClick={()=>{
                        getData(`${location.protocol}//${location.hostname}/${data.url}/delete`, {}, 'DELETE',
                        { index: content[i].id},
                        (d) => {
                          if (d.message) {
                            _Observer.Emit("Alert",{message: d.message,color: 'green'});
                            updateContent();
                          } else {
                            _Observer.Emit("Alert",{message: "Failed to delete",color: 'red'});
                          }
                        })
                      }} color="red" className="w-full" variant="outlined">Delete</Button>
                    </td>
                  </tr>
                })
              }

            </tbody>
          </table>
        </div>

      </DialogBody>
      <DialogFooter className="w-full h-[10vh] flex items-center justify-center flex-wrap">
        <Button
          onClick={() => openForm()}
          variant="text"
          color="green"
          className="mr-1 w-full xl:w-[fit-content] lg:w-[fit-content] md:w-[fit-content]"
        >
          <span>Add new data</span>
        </Button>
        <Button
          variant="text"
          color="indigo"
          className="mr-1 w-full xl:w-[fit-content] lg:w-[fit-content] md:w-[fit-content]"
        >
          <span>Download data to csv</span>
        </Button>
        <Button
          variant="text"
          color="indigo"
          className="mr-1 w-full xl:w-[fit-content] lg:w-[fit-content] md:w-[fit-content]"
        >
          <span>Download data to json</span>
        </Button>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1 w-full xl:w-[fit-content] lg:w-[fit-content] md:w-[fit-content]"
        >
          <span>Close</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

function AddNewData({ handleOpen, open, content, id, path }) {
  const allKeys = Object.keys(content[0] || {});
  const [message, setMessage] = useState("");
  let t = {};
  if (typeof id === 'number') {
    allKeys.forEach(d => {
      t = { ...t, [d]: content[id][d] || "" };
    });
  }else{
    allKeys.forEach(d => {
      t = { ...t, [d]: "" };
    });
  }
  // to send a file to server
  const file = new FormData();
  const [allContent, setAllContent] = useState(t);
  useEffect(() => {
    setMessage('');
  }, [open]);
  return (
    <Dialog className="h-[fit-content] max-h-[80%] overflow-y-auto top-[0px]" size="xl" open={open} handler={handleOpen}>
      <DialogBody className="flex-wrap flex-none gap-5" divider>
        <h1 className="text-indigo-600">{message}</h1>
        {
          allKeys.map((d, i) => {
            if (d === "id") return;
            if (typeof id === 'number') {
              if (/(file|image|video|document|avatar)/igm.test(d)) {
                return (
                  <div key={i} className="flex flex-col gap-5 items-start justify-center">
                    <label htmlFor="a" className="text-md">{d}</label>
                    <input onChange={d => file.set('avatar', d.target.files[0])} id="a" className="w-full outline-none border-none" type={"file"} />
                  </div>
                );
              }
              if (d === "description") return <Textarea onChange={f => setAllContent(g => ({ ...g, [d]: f.target.value }))} value={typeof allContent[d] === "string" ? allContent[d] : t[d]} key={i} label={d} />;
              return <Input onChange={f => setAllContent(g => ({ ...g, [d]: f.target.value }))} value={typeof allContent[d] === "string" ? allContent[d] : t[d]} key={i} label={d} size="lg" />;
            }
            if (/(file|image|video|document|avatar)/igm.test(d)) {
              return (
                <div key={i} className="flex flex-col gap-5 items-start justify-center">
                  <label htmlFor="a" className="text-md">{d}</label>
                  <input id="a" className="w-full outline-none border-none" type={"file"} />
                </div>
              );
            }
            if (d === "description") return <Textarea onChange={f => setAllContent(g => ({ ...g, [d]: f.target.value }))} value={typeof allContent[d] === "string" ? allContent[d] : t[d]} key={i} label={d} />;
            return <Input onChange={f => setAllContent(g => ({ ...g, [d]: f.target.value }))} value={typeof allContent[d] === "string" ? allContent[d] : t[d]} key={i} label={d} size="lg" />;
          })
        }
      </DialogBody>
      <DialogFooter className="p-[20px] h-[fit-content] flex items-center justify-end flex-wrap">
        <Button
          onClick={() => {
            if (id) {
              getData(`${location.protocol}//${location.hostname}/${path}/update`, {}, 'POST',
                { index: content[id].id, ...allContent },
                (d) => {
                  if (d.message) {
                    setMessage(d.message);
                  } else {
                    setMessage("Failed to update data");
                  }
                })
            } else {
              getData(`${location.protocol}//${location.hostname}/${path}/add`, {}, 'POST',
                { ...t, ...allContent },
                (d) => {
                  if (d.message) {
                    setMessage(d.message);
                  } else {
                    setMessage("Failed to update data");
                  }
                })
            }
          }}
          variant="text"
          color="green"
          className="mr-1 w-full xl:w-[fit-content] lg:w-[fit-content] md:w-[fit-content]"
        >
          <span>Save</span>
        </Button>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1 w-full xl:w-[fit-content] lg:w-[fit-content] md:w-[fit-content]"
        >
          <span>Close</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

function MyCard({ title, description, openEditor, url }) {
  const _Observer = useObserver();
  return (
    <Card className="w-full mb-[60px]">
      <CardHeader color="indigo" className="h-56 flex items-center justify-center">
        <b className="text-4xl">
          {(title.match(/[A-Z]/g) || []).join('')}
        </b>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-end py-3">
        <Button variant="outlined" color="indigo" onClick={() => {
          openEditor({ title, description, url });
          _Observer.Emit("Current-Path", { path: url });
        }}>

          <Typography variant="small" color="gray" className="flex gap-1">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            Manage
          </Typography>
        </Button>
      </CardFooter>
    </Card>
  );
}

const onConfirmRefresh = function (event) {
  event.preventDefault();
  return event.returnValue = "Are you sure you want to leave the page?";
}

window.addEventListener("beforeunload", onConfirmRefresh, { capture: true });

export default function App() {

  const _Observer = useObserver();
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [data, setData] = useState({});
  const [content, SetContent] = useState([]);
  const [indexContent, setIndexContent] = useState(void 0);
  const [path, setPath] = useState('');

  useMemo(() => {
    _Observer.Unsubscribe("Current-Path");
    _Observer.Subscribe("Current-Path", ({ path }) => {
      setPath(path);
    });
    _Observer.Unsubscribe("Edit-Data");
    _Observer.Subscribe("Edit-Data", ({ content, id, data }) => {
      console.log(id);
      setPath(data.url);
      setIndexContent(id);
      SetContent(content);
      setOpenForm(true);
    });
  });

  const handleOpen = async (_data) => {
    setData(_data);
    setOpen(!open);
    if (!_data.url) return;
    await getData(`${location.protocol}//${location.hostname}/${_data.url}/get`, {}, "get", {}, (data) => {
      SetContent(data);
    });
  }

  const allNav = [
    {
      title: "Show Case",
      description: "Upload new project for client see our works, and help them to know what's our goals",
      url: "show-case"
    },
    {
      title: "Testimonials",
      description: "Manage Testimonials to improve our site with client trusted",
      url: "testimonials"
    },
    {
      title: "About Us",
      description: "Update our information",
      url: "about"
    },
    {
      title: "UI-Kit",
      description: "Upload new Ui-Kit Design",
      url: "ui-kit"
    },
    {
      title: "Our Services",
      description: "Add new Services or removed and update",
      url: "services"
    }
  ];

  return (
    <>
      <MyNavbar />
      <div className="w-[100%] flex flex-col justify-center items-center">
        <h1 className="w-[90%]  font-bold text-3xl text-indigo-600 mb-[50px]">
          Welcome, <br />Ari Susanto
        </h1>
        <div className="grid p-5 gap-5 grid-cols-[repeat(auto-fit,minmax(300px,2fr))] w-full">
          {
            allNav.map((d, i) => {
              return <MyCard url={d.url} key={i} title={d.title} description={d.description} openEditor={handleOpen}></MyCard>;
            })
          }
        </div>
      </div>
      <div className="w-[100%] p-5 text-center">
        <b>&copy;Senyuman.ID & Create By Daberdev</b>
      </div>
      <ContentEdit 
      updateContent = {()=>{
        handleOpen(data);
        setOpen(true);
      }}
      openForm={() => {
        setOpenForm(true);

      }} content={content} data={data} open={open} handleOpen={() => setOpen(!open)} />
      <AddNewData path={path} id={indexContent} content={content} open={openForm} handleOpen={() => {
        handleOpen(data);
        setOpen(true);
        setOpenForm(false);
        setIndexContent(null);
      }} />
      <AlertSet/>
    </>
  );

}