import './DashAge.scss'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'
import { stil } from '../../hooks/useDio'

function DashAge() {
    const { data, isSuccess } = useQuery({
        queryKey: 'age',
        queryFn: () => client('age'),
    })
  

    return (
        <>
            <div className='stats__age stats-age'>
                <h3 className='stats-age__title'>Age</h3>
                <ul className='stats-age__list'>
                    {isSuccess &&
                        data?.map((e, i) => (
                            <li className='stats-age__item' key={i}>
                                <div className='stats-age__inner'>
                                    <p className='stats-age__text'>{e.desc}</p>
                                    <span className='stats-age__count'>
                                        {e.percent}%
                                    </span>
                                </div>
                                <span
                                    className='stats-age__dio'
                                    aria-label='70%'
                                    style={{ width: e.percent + '%', background: stil(e?.percent)[0] }}></span>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    )
}

export default DashAge
