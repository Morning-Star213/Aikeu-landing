import { userComments } from "@/public/data/work-experience";
import Works from "./work";

const BlogDetails = () => {
    return (
        <section className="section2 b-details sticky-parent" id="work-experience">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-5">
                        <div className="section__header text-center">
                            <h2 className="title sub-title-two mt-0 title-animation">
                                Work Experience
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="b-details__content sticky-item">
                            <div className="b-comment-new">
                                <div className="b-comment__wrapper">
                                    {userComments.map((item) => {
                                        return <Works key={item.id} item={item} />;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-12 col-lg-4">
            <BlogDetailsSidebar />
          </div> */}
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
