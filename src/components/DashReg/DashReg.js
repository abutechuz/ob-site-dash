import './DashReg.scss'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'
import { stil } from '../../hooks/useDio'

function DashReg() {
    const { data, isSuccess } = useQuery({
        queryKey: 'regions',
        queryFn: () => client('regions'),
    })

    return (
        <>
            <div className='stats__reg stats-reg'>
                <h3 className='stats-reg__title'>Region</h3>
                <ul className='stats-reg__list'>
                    {isSuccess &&
                        data?.map((e, i) => (
                            <li
                                className='stats-reg__item'
                                key={i}
                                style={{ background: stil(e?.percent)[1] }}>
                                <p className='stats-reg__text'>{e?.name}</p>
                                <span
                                    className='stats-reg__span'
                                    style={{ background: stil(e?.percent)[0] }}>
                                    {e?.percent}%
                                </span>
                                <span className="stats-reg__count" style={{ background: stil(e?.percent)[0], borderColor: stil(e?.percent)[0]}}>{e?.percent}</span>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    )
}
export default DashReg
