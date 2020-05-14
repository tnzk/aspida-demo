export type CategoryList = {
    can_create_category: boolean,
    can_create_topic: boolean,
    draft: boolean,
    draft_key: string,
    draft_sequence: number,
    categories: Category[]
}

export type Category = {
    id: number,
    name: string,
    color: string,
    text_color: string
    slug	: string,
    topic_count	: number,
    post_count	: number,
    position	: number,
    description	: string,
    description_text	: string,
    topic_url	: string,
    logo_url	: string,
    background_url	: string,
    read_restricted	: boolean,
    permission	: number,
    notification_level	: string,
    can_edit	: boolean,
    topic_template	: string,
    has_children	: boolean,
    topics_day	: number,
    topics_week	: number,
    topics_month	: number,
    topics_year	: number,
    topics_all_time	: number,
    description_excerpt	: string,
}

export type Methods = {
    get: {
        resBody: {
            category_list: CategoryList
        },
    }
}